import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Atom from "./Atom";
import Load from "../Load";

const Developer = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Suspense fallback={<Load />}>
          <Atom />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default Developer;
