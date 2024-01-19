import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import {
  Button,
  HeroDescription,
  HeroLeft,
  HeroRight,
  HeroSubtitle,
  HeroTitle,
  What,
  Line,
  HeroAstronaut,
} from "../../style";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* row-gap: 100px; */
  
  @media only screen and (max-width: 768px) {
    height: 200vh;
    margin-bottom: 30px;
    /* row-gap: 50px; */
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    /* display: flex; */
    height: 1056px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <HeroLeft>
          <HeroTitle>Think. Make. Solve.</HeroTitle>
          <What>
            <Line src="./images/line.png" />
            <HeroSubtitle>WHat We Do</HeroSubtitle>
          </What>
          <HeroDescription>
            Creste and help others to create websites
          </HeroDescription>
          <Button>Learn More</Button>
        </HeroLeft>
        <HeroRight>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#7111bb"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <HeroAstronaut src="./images/moon.png" />
        </HeroRight>
      </Container>
    </Section>
  );
};

export default Hero;
