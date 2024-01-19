import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Web from "./Web";
// import Ipad from "./Ipad";
import Load from "../Load";

const Webdesign = () => {
  return (
    <Canvas>
      <Stage intensity={0.6}>
        <Suspense fallback={<Load />}>
          <Web />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default Webdesign;
