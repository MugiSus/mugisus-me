import { createSignal, onCleanup, onMount } from 'solid-js';
import * as THREE from 'three';
import fragmentShader from './fragment.frag?raw';
import vertexShader from './vertex.vert?raw';

const SAMPLE_COLORS = [
  0xfe4a49, 0xfed766, 0x009fb7, 0xe6e6ea, 0xf4f4f8,
].flatMap((hex) => [
  ((hex >> 16) & 0xff) / 255,
  ((hex >> 8) & 0xff) / 255,
  (hex & 0xff) / 255,
]);

export default function GradientBackground() {
  const [isReady, setIsReady] = createSignal(false);
  let canvasRef: HTMLCanvasElement | undefined;
  let reqId: number;

  onMount(() => {
    // We only want to run three.js code on the client
    if (typeof window === 'undefined' || !canvasRef) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uColors: { value: SAMPLE_COLORS },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Timer();

    const renderFrame = () => {
      material.uniforms.uTime.value = (clock.getElapsed() % 6000) / 400;
      material.uniforms.uScroll.value = window.scrollY;
      renderer.render(scene, camera);
    };

    const render = () => {
      renderFrame();
      reqId = requestAnimationFrame(render);
    };

    renderer.compile(scene, camera);
    renderFrame();
    requestAnimationFrame(() => setIsReady(true));
    reqId = requestAnimationFrame(render);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderFrame();
    };
    window.addEventListener('resize', handleResize);

    onCleanup(() => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    });
  });

  return (
    <canvas
      ref={(el) => (canvasRef = el)}
      class='pointer-events-none fixed top-0 left-0 -z-10 h-full w-full transition-opacity duration-5000 ease-in-out'
      classList={{
        'opacity-0': !isReady(),
        'opacity-100': isReady(),
      }}
    />
  );
}
