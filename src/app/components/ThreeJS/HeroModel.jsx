import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, ChromaticAberration, EffectComposer, Noise, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { Model } from "src/assets/models/castlevania";
import { Preload, Html, OrbitControls, PresentationControls, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "2rem",
      }}
    >
      Loading {progress.toFixed(2)}%
    </Html>
  );
};

// rotation , rotation: [0.33907, -0.000024, -9.4405]

export const HeroModel = () => {
  //   const effects = useMemo(() => (
  //   // <EffectComposer enabled={true}>
  //   //    <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
  //   //   <ChromaticAberration
  //   //     blendFunction={BlendFunction.NORMAL}
  //   //      radialModulation={true}
  //   //       modulationOffset={0.15}
  //   //     offset={[0.0002, 0.000005]}
  //   //   />
  //   //   <Noise premultiply opacity={0.02} />
  //   //   <Bloom  blendFunction={BlendFunction.SCREEN}
  //   //       intensity={1.5}
  //   //       luminanceThreshold={0.2}
  //   //       luminanceSmoothing={0.5}
  //   //       kernelSize={KernelSize.LARGE}
  //   //       height={0.1} />

  //   //     <ToneMapping
  //   //       blendFunction={BlendFunction.NORMAL}
  //   //       adaptive={true}
  //   //       resolution={256}
  //   //       middleGrey={0.6}
  //   //       maxLuminance={16.0}
  //   //       averageLuminance={1.0}
  //   //       adaptationRate={1.0}
  //   //     />

  //   //     <Vignette
  //   //       blendFunction={BlendFunction.NORMAL}
  //   //       darkness={0.5}
  //   //       offset={0.3}
  //   //       eskil={false}
  //   //     />
  //   // </EffectComposer>
  // ), []);

  return (
    <Canvas
      linear={true}
      flat
      shadows
      id="hero-model"
      dpr={[1, 2]}
      camera={{ fov: 26, position: [-1.1872, -2.385, 45.981] }}
      style={{
        width: "90vw",
        height: "90vh",
        margin: "auto",
      }}
    >
      <Preload all />
      <Suspense fallback={<Loader />}>
        <spotLight intensity={100} position={[10, 10, 10]} />
        <directionalLight intensity={9.5} />
        <Model />
        <OrbitControls autoRotate autoRotateSpeed={0.3} />
        <PresentationControls
          global
          autoRotate
          autoRotateSpeed={0.3}
          rotation={[-Math.PI / 2, -Math.PI / 4, -Math.PI / 4]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        />
      </Suspense>
      {/* {effects} */}
      {/* TODO: fix effects composers */}
    </Canvas>
  );
};
