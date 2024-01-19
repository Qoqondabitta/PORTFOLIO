import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Media from "./Media";
import Load from "../Load";

const Social = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Suspense fallback={<Load />}>
          <Media />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default Social;
