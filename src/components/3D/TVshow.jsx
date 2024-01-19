import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
// import Show from "./Show";
import Xia from "./Xia";

import Load from "../Load";

const TVWebdesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Suspense fallback={<Load />}>
          <Xia />
        </Suspense>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default TVWebdesign;
