import React from "react";
import {
  AnimateText,
  Arrow,
  ArrowWrap,
  BodyButton,
  BodySpan,
  BodyText,
  Container,
  Description,
  Image,
  Left,
  Right,
  Section,
} from "./style";
import body from "../../assets/image/body.jpg";
import { Tilt } from "react-tilt";
import ReactTyped from "react-typed";
import arrow from "../../assets/image/arrow.png";
import Navbar from "../navbar/Navbar";
import useNav from "../../hooks/useNav";
import { motion } from "framer-motion";
import "./design.css";
import { IoIosArrowDown } from "react-icons/io";

const opt = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const stringToRender = [
  "Front-End Developer 👨‍💻",
  "Tv Hoster 👨‍⚖️",
  "Mentor 👨‍🏫",
  "Team Leader 🦸‍♂️",
  "Wrestler 🤼",
];

const Body = () => {
  const homeRef = useNav("Home");
  return (
    <Section ref={homeRef} id="home">
      <Navbar />
      <Container>
          <Left>
            <Description>
              <BodyText className="titleOne">
                🖐️ Hi There, <br />
              </BodyText>
              <BodyText className="titleTwo">
                I'm<BodySpan> Abdulakhad</BodySpan> <br />
              </BodyText>
              <BodyText className="titleThree">Turgunaliev</BodyText>
              <AnimateText>
                I'm{" "}
                <ReactTyped
                  strings={stringToRender}
                  typeSpeed={60}
                  backSpeed={50}
                  className="color"
                  loop
                />
              </AnimateText>
              <a href="#about" style={{ textDecoration: "none" }}>
                <BodyButton className="btntext">
                  About Me
                  <IoIosArrowDown color="white" size="1.2em" className="btn" />
                </BodyButton>
              </a>
            </Description>
          </Left>
        
        <Right>
          <Tilt className="titleThree"
            options={opt}
            style={{
              height: "600px",
              width: "600px",
              "@media only screen and (maxWidth: 768px)": {
                width: "300px",
                height: "300px",
                margin: "0 auto",
              },
            }}
          >
              <Image src={body} alt="body" />
          </Tilt>
        </Right>
      </Container>
    </Section>
  );
};

export default Body;
