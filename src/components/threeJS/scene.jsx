import React  from 'react';
import { Suspense, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Scene = ({ modelPath, scale = 40 }) => {
  const ref = useRef(null);
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
    </>
  );
};

export const SceneViewer = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 30, position: [0, 0, 0] }}
      style={{
        margin: "auto",
      }}
    >
      <Preload all />
      <Suspense fallback={<Html center>Loading</Html>}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} rotation={0.15} />
        <pointLight position={[-10, -10, -10]} />
        <directionalLight intensity={9.5} />
        {children}
        <OrbitControls autoRotate autoRotateSpeed={0.15} />
        <PresentationControls
          global
          rotation={[-Math.PI / 2, -Math.PI / 4, -Math.PI / 4]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        />
        <EffectComposer>
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={[0.0002, 0.000005]} // color offset
          />
          <Noise premultiply />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.8} height={0.1} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};
