import React from "react";
import {
  Buttons,
  HeroDescription,
  HeroSubtitle,
  HeroTitle,
  Line,
  What,
} from "../../style";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { styled } from "styled-components";
import ReactTyped from "react-typed";
import useNav from "../hooks/useNav";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 450px) {
    position: relative;
    top: -400px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
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
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    /* background: red; */
    /* display: none; */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 20px;
  background: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    width: 300px;
    padding: 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 45px;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const stringToRender = [
  " Front-End Developer 👨‍💻",
  " Tv Hoster 👨‍⚖️",
  " Mentor 👨‍🏫",
  " Team Leader 🦸‍♂️",
  " Opponent 😈",
  " Friend 👥",
  " New Student 🧑‍🎓",
];

const Who = () => {
  const whoRef = useNav("Who")
  return (
    <Section ref={whoRef} id="who">
        <TitleWrapper>
          <Title>Who</Title>
          <Title style={{color: "gold"}}> ?</Title>
        </TitleWrapper>
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
          <HeroTitle>Let's Find Out</HeroTitle>
          <What>
            <Line src="./images/line.png" />
            <HeroSubtitle>Who am I for you ?</HeroSubtitle>
          </What>
          <HeroDescription>
            maybe{" "}
            <ReactTyped
              strings={stringToRender}
              typeSpeed={60}
              backSpeed={50}
              className="color"
              loop
            ></ReactTyped>
          </HeroDescription>
          <a href="#contact">
            {" "}
            <Button style={{ marginTop: "20px"}}>
              Hire Now
            </Button>
          </a>{" "}
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
