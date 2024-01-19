import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { Container, HeadText, List, Bunker } from "./style";
import {
  additional,
  library,
  services,
  technologies,
} from "../../constants/index";
import Ability from "./ServiceCard";
import useNav from "../../hooks/useNav";
import Skills from "./Skills";
import { useState } from "react";
import Additional from "./Additional";

const textAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const skills = ["React", "Technology", "Fields", "Additional"];

const About = () => {
  const [title, setTitle] = useState("React");
  const aboutRef = useNav("Skills");
  return (
    <Container ref={aboutRef} id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        custom={0}
        variants={textAnimation}
      >
        <List>
          {skills.map((value) => (
            <HeadText
              key={value}
              className={`${title === value ? "activeTitle" : null}`}
              onClick={() => setTitle(value)}
            >
              {value}
            </HeadText>
          ))}
        </List>
      </motion.div>
      {title === "Technology" ? (
        <Bunker>
          {technologies.map((tech, index) => (
            <Skills key={index} tech={tech} index={index} />
          ))}
        </Bunker>
      ) : title === "Additional" ? (
        <Bunker style={{ alignItems: "flex-start" }}>
          {additional.map((tech, index) => (
            <Skills key={index} tech={tech} index={index} />
          ))}
        </Bunker>
      ) : title === "React" ? (
        <Bunker style={{ alignItems: "flex-start" }}>
          {library.map((tech, index) => (
            <Additional key={index} tech={tech} index={index} />
          ))}
        </Bunker>
      ) : (
        <Bunker>
          {services.map((service, index) => (
            <Ability key={service.title} index={index} {...service} />
          ))}
        </Bunker>
      )}
    </Container>
  );
};

// export default SectionWrapper(About, "about")
export default About;
