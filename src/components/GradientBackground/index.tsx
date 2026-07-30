import { createSignal, onCleanup, onMount } from 'solid-js';
import * as THREE from 'three';
import fragmentShader from './fragment.frag?raw';
import vertexShader from './vertex.vert?raw';

const SAMPLE_COLORS = [0xfe4a49, 0xfed766, 0x009fb7, 0xe6e6ea, 0xf4f4f8];

export default function GradientBackground() {
  const [isReady, setIsReady] = createSignal(false);
  let canvasRef: HTMLCanvasElement | undefined;
  let reqId: number;

  onMount(() => {
    // We only want to run three.js code on the client
    if (!canvasRef) return;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    const resizeRendererToCanvas = () => {
      if (!canvasRef) return;

      const { clientWidth, clientHeight } = canvasRef;
      if (clientWidth === 0 || clientHeight === 0) return;
      renderer.setSize(clientWidth, clientHeight, false);
    };

    resizeRendererToCanvas();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uColors: {
          value: SAMPLE_COLORS.flatMap((hex) => [
            ((hex >> 16) & 0xff) / 255,
            ((hex >> 8) & 0xff) / 255,
            (hex & 0xff) / 255,
          ]),
        },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Timer();

    const renderFrame = () => {
      clock.update();
      material.uniforms.uTime.value = clock.getElapsed() % 600;
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
      resizeRendererToCanvas();
      renderFrame();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvasRef);
    window.addEventListener('orientationchange', handleResize);

    onCleanup(() => {
      cancelAnimationFrame(reqId);
      resizeObserver.disconnect();
      window.removeEventListener('orientationchange', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    });
  });

  return (
    <div class='fixed top-0 left-0 -z-50 h-lvh w-lvw bg-[#82A52C]'>
      <canvas
        ref={(el) => (canvasRef = el)}
        class='pointer-events-none size-full transition-opacity duration-5000 ease-in-out'
        classList={{
          'opacity-0': !isReady(),
          'opacity-100': isReady(),
        }}
      />
    </div>
  );
}
