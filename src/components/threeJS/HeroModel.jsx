import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, ChromaticAberration, EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Model } from "src/assets/models/castlevania";
import { Preload, Html, OrbitControls, PresentationControls } from "@react-three/drei";

export const HeroModel = () => {
  return (
    <Canvas
      flat
      shadows
      id="hero-model"
      dpr={[1, 2]}
      camera={{ fov: 26, position: [-1.1872, -2.385, 45.981], rotation: [0.33907, -0.000024, -9.4405] }}
      style={{
        width: "100vw",
        height: "100vh",
        margin: "auto",
      }}
    >
      <Preload all />
      <Suspense fallback={<Html center>Loading...</Html>}>
        <spotLight intensity={100} position={[10, 10, 10]} />
        <directionalLight intensity={9.5} />
        <Model />
        <OrbitControls autoRotate autoRotateSpeed={0.3} />
        <PresentationControls
          global
          rotation={[-Math.PI / 2, -Math.PI / 4, -Math.PI / 4]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        />
      </Suspense>
      <EffectComposer>
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0002, 0.000005]} // color offset
        />
        <Noise premultiply />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={0.1} />
      </EffectComposer>
    </Canvas>
  );
};
