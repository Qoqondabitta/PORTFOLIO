import React from "react";
import {
  Button,
  // HeroContainer,
  HeroDescription,
  // HeroLeft,
  // HeroRight,
  HeroSubtitle,
  HeroTitle,
  Line,
  What,
  // WhoSection,
} from "../../style";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { styled } from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    flex-direction: column;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  height: 100vh;
  /* background: red; */
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 10px;
  /* display: none; */
}
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
background: red;
    display: none;
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <HeroTitle>Think Outside The Box</HeroTitle>
          <What>
            <Line src="./images/line.png" />
            <HeroSubtitle>Who We Are</HeroSubtitle>
          </What>
          <HeroDescription>
            An experienced, accomplished and diligent developers with unbridled
            passion for programming.
          </HeroDescription>
          <Button style={{ marginTop: "20px", width: "fit-content" }}>
            See Our Works
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
