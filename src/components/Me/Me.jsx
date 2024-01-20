import React from "react";
import {
  Container,
  Left,
  Right,
  Section,
  Sub,
  Text,
  Round,
  RotatingText,
  Next,
  Relative,
  Small,
  Duplicate,
  SpaN,
} from "./style";
import it from "../../assets/additional/it.jpg";
import cv from "../../assets/additional/Front-EndCV.pdf";
import useNav from "../../hooks/useNav";
import { motion } from "framer-motion";
import { TitleWrapper, Title } from "../experience/style";
import { IoIosArrowForward } from "react-icons/io";
import "./me.css";
import { ImUser } from "react-icons/im";
import { MdWavingHand } from "react-icons/md";
import Slider from "../Slider/Slider";
import { BodyButton } from "../myBody/style";

const divAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.7 },
  }),
};

const textAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const MePart = () => {
  const aboutRef = useNav("About");
  return (
    <motion.section>
      <Section ref={aboutRef} id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={textAnimation}
          custom={0}
        >
          <TitleWrapper>
            <ImUser size="3em" color="white" />
            <Title>About </Title>
            <Title style={{ color: "#da4ea2" }}>Me</Title>
          </TitleWrapper>
        </motion.div>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={divAnimation}
            custom={0}
          >
            <Left>
              <Slider />
              <Round>
                <Duplicate src={it} />
                <Relative>
                  <Small src={it} />
                  <Next>
                    <RotatingText style={{ "--i": "1.05" }}>F</RotatingText>
                    <RotatingText style={{ "--i": "2" }}>n</RotatingText>
                    <RotatingText style={{ "--i": "3" }}>l</RotatingText>
                    <RotatingText style={{ "--i": "4" }}>n</RotatingText>
                    <RotatingText style={{ "--i": "5" }}>D</RotatingText>
                    <RotatingText style={{ "--i": "5.95" }}>e</RotatingText>
                    <RotatingText style={{ "--i": "7" }}>E</RotatingText>
                    <RotatingText style={{ "--i": "8" }}>e</RotatingText>
                    <RotatingText style={{ "--i": "9" }}>o</RotatingText>
                    <RotatingText style={{ "--i": "10" }}> </RotatingText>
                    <RotatingText style={{ "--i": "11" }}>p</RotatingText>
                    <RotatingText style={{ "--i": "12" }}>-</RotatingText>
                    <RotatingText style={{ "--i": "13" }}>v</RotatingText>
                    <RotatingText style={{ "--i": "14" }}>r</RotatingText>
                    <RotatingText style={{ "--i": "15" }}>d</RotatingText>
                    <RotatingText style={{ "--i": "16" }}>o</RotatingText>
                    <RotatingText style={{ "--i": "17" }}>t</RotatingText>
                    <RotatingText style={{ "--i": "18" }}>e</RotatingText>
                    <RotatingText style={{ "--i": "18.85", marginTop: "6px" }}>
                      r
                    </RotatingText>
                  </Next>
                </Relative>
              </Round>
            </Left>
          </motion.div>
          <Right>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={divAnimation}
              custom={0}
            >
              <Sub style={{ color: "gold" }}>
                I'm Abdulakhad{" "}
                <MdWavingHand className="wavinHand" size="0.7em" color="gold" />
              </Sub>
              <Text style={{ marginBottom: "30px" }}>Front-End Developer</Text>
              <Text style={{ marginBottom: "20px" }}>
                An accomplished and dilligent Front_end Developer 👨‍💻 with a
                practical {""}
                <SpaN style={{ color: "#da4ea2" }}>
                  experiance of more than about 2 years{" "}
                </SpaN>
                in creating responsive websites and applications using
                technologies such as{" "}
                <SpaN> HTML, CSS, JavaScript, ReactJS and THREE JS</SpaN> and
                approximately a year qualification of teaching 👨‍🏫 JavaScript and
                ReactJS to up to 15-year-old children 👨‍💻.
              </Text>
              <Text style={{ marginBottom: "20px" }}>
                Having decent knowledge in ReactJS, I learned variaty of
                libraries like {""}
                <SpaN style={{ color: "#da4ea2" }}>
                  Typed, Tilt, Vertical-Timeline-Element, Particles,
                  Framer-Motion, Email JS {""}
                </SpaN>
                and many others also managed integrate 3D Models with projects
                learning
                <SpaN>
                  {""} THREE JS and react-three-fiber react-three-drei .
                </SpaN>
              </Text>
              <Text style={{ marginBottom: "30px" }}>
                Seeking a challenging position as a Front_end Developer 👨‍💻 in an
                organization 🏛️ where I can utilize my qualification in
                programming to contribute to the triumph 🥳 of the company 🏛️
                and transcend my current knowledge limit in developing with
                social and cooperative partners 👨‍💻.
              </Text>
              <a href={cv} download="Front-EndCV.pdf">
                <BodyButton className="btntext">
                  Resume <IoIosArrowForward size="1.2em" className="btn" />
                </BodyButton>
              </a>
            </motion.div>
          </Right>
        </Container>
      </Section>
    </motion.section>
  );
};

export default MePart;
