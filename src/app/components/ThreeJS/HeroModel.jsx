import { Suspense, useMemo, lazy, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from '@react-spring/three';
import { SMAA, Bloom, ChromaticAberration, EffectComposer, Vignette, Noise, DepthOfField, ToneMapping } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { Preload, Html, PresentationControls, useProgress } from "@react-three/drei";
import style from "@components/IndexHero/Index.module.scss";

const Model = lazy(() => import("src/assets/models/castlevania")
  .then(module => ({ default: module.Model })));

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      className={style["model-loader"]}
      center // Use center prop instead of manual styling
    >
      Loading<br /><br />
      <span> {progress.toFixed(0)}%</span>
    </Html>
  );
};

export const HeroModel = () => {

  const SceneLights = useMemo(() => () => (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        position={[-1, 2, 10]}
        intensity={5}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-bias={-0.001}
      />
      <directionalLight
        position={[10, 5, 5]}
        intensity={4}
        color="#ffddcc"
      />
      <directionalLight
        position={[-10, 5, 5]}
        intensity={4}
        color="#ccddff"
      />
      <pointLight
        position={[0, 5, 15]}
        intensity={8}
        distance={50}
        decay={1}
      />
    </>
  ), []);

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI / 4, 0] },
    config: {
      duration: 18000,
      easing: (t) => Math.sin((t * Math.PI) / 2)
    },
    loop: { reverse: true },
  });

  const { focusDistance } = useSpring({
    from: { focusDistance: -40 },
    to: { focusDistance: 40 },
    config: { duration: 8000, tension: 50, friction: 20 },
    delay: 500,
  });

  const effects = useMemo(() => (
    <EffectComposer multisampling={4}>
      <SMAA />
      <DepthOfField
        focusDistance={focusDistance}
        focalLength={0.02}
        bokehScale={2.5}
        height={240}
        blendFunction={BlendFunction.NORMAL}
        worldFocusRange={0.1} />
      <Bloom
        blendFunction={BlendFunction.ADD}
        intensity={1}
        luminanceThreshold={0.6} // - to add light
        luminanceSmoothing={0.3}
        kernelSize={KernelSize.SMALL}
        height={400}
        levels={9}
        mipmapBlur />
      <Bloom
        blendFunction={BlendFunction.SCREEN}
        intensity={0.3}
        luminanceThreshold={0.8}
        luminanceSmoothing={0.1}
        kernelSize={KernelSize.VERY_SMALL}
        height={600}
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        radialModulation
        modulationOffset={0.25}
        offset={[0.0015, 0.0015]}
        radialModulationScale={0.25}
        noiseAmount={0.02}
        radius={0.3}
        tint={{ r: 1.1, g: 1.0, b: 0.9 }}
      />

      <Vignette
        darkness={0.15}
        offset={0.1}
        eskil={false}
      />
      <Noise premultiply opacity={0.015} />
      <ToneMapping
        blendFunction={BlendFunction.NORMAL}
        adaptive
        resolution={256}
        middleGrey={0.7}
        maxLuminance={20.0}
        averageLuminance={2}
        adaptationRate={2}
      />
    </EffectComposer>
  ), [focusDistance]);

  const presentationConfig = useMemo(() => ({
    global: true,
    cursor: true,
    snap: true,
    speed: 1,
    zoom: 0.8,
    rotation: [0, 0, 0],
    polar: [-Math.PI / 4, Math.PI / 4],
    azimuth: [-Math.PI / 4, Math.PI / 4],
    config: { mass: 1, tension: 200, friction: 30 },
  }), []);

  return (
    <Canvas
      linear
      flat
      shadows
      id="hero-model"
      dpr={1.5}
      performance={{ min: 0.5, max: 1, debounce: 2000 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
        precision: "mediump",
        depth: true,
        stencil: false,
      }}
      camera={{
        fov: 17,
        position: [-1.1872, -2.385, 45.981],
        near: 1,
        far: 500,
      }}
      style={{
        width: "95vw",
        height: "100vh",
        touchAction: "none",
      }}
      frameloop="demand"
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        gl.physicallyCorrectLights = false;
        gl.outputColorSpace = 'srgb';
      }}
    >
      <Preload all />
      <Suspense fallback={<Loader />}>
        <PresentationControls {...presentationConfig} >
          <SceneLights />
          <animated.group rotation={rotation}>
            <Model />
          </animated.group>
        </PresentationControls>
      </Suspense>
      {effects}
    </Canvas>
  );
};
