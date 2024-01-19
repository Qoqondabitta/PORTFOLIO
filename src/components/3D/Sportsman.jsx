import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Turnik from "./Turnik";
import Load from "../Load";

const Sportsman = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Suspense fallback={<Load />}>
            <Turnik />
          </Suspense>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </>
  );
};

export default Sportsman;
