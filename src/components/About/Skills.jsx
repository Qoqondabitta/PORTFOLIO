import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { Bunker, Coffee, ServiceCards, Title, Image } from "./style";
// import git from "../../assets/tech/git.png"
// import css from "../../assets/tech/css.png"
// import html from "../../assets/tech/html.png"
// import js from "../../assets/tech/javascript.png"
// import react from "../../assets/tech/reactjs.png"
// import redux from "../../assets/tech/redux.png"
// import tailwind from "../../assets/tech/tailwind.png";
// import typeScript from "../../assets/tech/typescript.png";
// import three from "../../assets/tech/threejs.svg";

const faultOptions = {
  max: 45, // max tilt rotation (degrees)
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 250, // Speed of the enter/exit transition
};

const Skills = ({ tech, index }) => {
  return (
    <Tilt
      options={faultOptions}
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <ServiceCards variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
        <Coffee>
          <Image src={tech.icon} />
          <Title>{tech.name}</Title>
        </Coffee>
      </ServiceCards>
    </Tilt>
  );
};

export default Skills;
