import React, { useState } from "react";
import { styled } from "styled-components";
import { WorkList, WorkListItem } from "../../../style";
import useNav from "../../hooks/useNav";
import Developer from "./Developer";
import Social from "./Social";
import Sportsman from "./Sportsman";
import TV from "./TVshow";
import Webdesign from "./Webdesign";
import { FaLaptopCode } from "react-icons/fa";
import "./designs.css"
import {motion} from "framer-motion"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const Right = styled.div`
  width: 700px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
  `;

const Left = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 300px;
    height: 300px;
    align-items: flex-end;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

@media only screen and (max-width: 768px) {
  position: relative;
  top: 80px;
}

  @media only screen and (min-width: 1400px) {
  position: relative;
  top: 50px;
  }
`;

export const Titles = styled.h1`
  color: #fff;
  font-size: 47px;

@media only screen and (max-width: 768px) {
  font-size: 35px;
} 
`

const works = [
  "Development",
  "Web Design",
  "Sportsman",
  "TV Hoster",
  "Social Media",
];


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

const Works = () => {
  const [work, setWork] = useState("Sportsman");
  const devRef = useNav("3D Models");
  return (
    <Section ref={devRef} id="models">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={textAnimation}
        custom={0}
      >
        <Wrap>
          <FaLaptopCode className="display" size="3.5em" color="white" />
          <FaLaptopCode className="blocks" size="2.5em" color="white" />
          <Titles>Duties & </Titles>
          <Titles style={{ color: "yellow" }}>Hobbies</Titles>
        </Wrap>
      </motion.div>
      <Container>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
        variants={divAnimation}
        custom={0}
        >
          <Left>
            <WorkList>
              {works.map((item) => (
                <WorkListItem
                  key={item}
                  text={item}
                  onClick={() => setWork(item)}
                  className={item === work ? "vayvo" : null}
                >
                  {item}
                </WorkListItem>
              ))}
            </WorkList>
          </Left>
        </motion.div>
        <Right>
          {work === "Development" ? (
            <Developer />
          ) : work === "Web Design" ? (
            <Webdesign />
          ) : work === "Sportsman" ? (
            <Sportsman />
          ) : work === "TV Hoster" ? (
            <TV />
          ) : (
            <Social />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
