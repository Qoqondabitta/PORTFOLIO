import { OrbitControls, useTexture, Icosahedron, Decal } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { TestContainer } from "../../style";
import body from "../assets/image/body.jpg";

// const TextureBox = () => {
//   return (
//     <Icosahedron args={[1, 1, 1]} scale={2}>
//       <meshStandardMaterial map={t} />
//     </Icosahedron>
//   );
// };

const Test = () => {
  const t = useTexture(body);
  return (
    <TestContainer>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#fff" polygonOffset polygonOffsetFactor={5} flatShading />
          <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={t} />
        </mesh>
      </Canvas>
    </TestContainer>
  );
};

export default Test;
