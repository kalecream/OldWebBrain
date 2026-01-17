import { PresentationControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Model as IndexScene } from "src/assets/models/Scene";

export const SiteBackground = (): any => {
  return (
    // @ts-ignore
    <Canvas
      shadows
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        filter: "saturate(1.15) hue-rotate(345deg)",
        zIndex: -999,
      }}
    >
      {/* <fog color="#161616" attach="fog" near={8} far={50} /> */}
      <Suspense
        fallback={
          <Html center>
            <div className="subtleBackground" />
          </Html>
        }
      >
        <ambientLight />
        <IndexScene />
        <directionalLight />
        <PresentationControls
          global
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        />
      </Suspense>
    </Canvas>
  );
};
