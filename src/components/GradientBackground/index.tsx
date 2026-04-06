import { onMount, onCleanup } from 'solid-js';
import * as THREE from 'three';
import fragmentShader from './fragment.frag?raw';
import vertexShader from './vertex.vert?raw';

export default function GradientBackground() {
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
        uColor1: { value: [207 / 255, 227 / 255, 27 / 255] },
        uColor2: { value: [34 / 255, 88 / 255, 66 / 255] },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    const render = () => {
      material.uniforms.uTime.value = (clock.getElapsedTime() % 6000) / 400;
      material.uniforms.uScroll.value = window.scrollY;
      renderer.render(scene, camera);
      reqId = requestAnimationFrame(render);
    };

    reqId = requestAnimationFrame(render);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
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
      class='pointer-events-none fixed top-0 left-0 -z-10 h-full w-full'
    />
  );
}
