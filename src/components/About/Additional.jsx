import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { Coffee, ServiceCards, Title, Image } from "./style";

const faultOptions = {
  max: 45, // max tilt rotation (degrees)
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 250, // Speed of the enter/exit transition
};

const Additional = ({ tech, index }) => {
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
          <Image src={tech.icon} alt={tech.name} />
          <Title>{tech.name}</Title>
        </Coffee>
      </ServiceCards>
    </Tilt>
  );
};

export default Additional;
