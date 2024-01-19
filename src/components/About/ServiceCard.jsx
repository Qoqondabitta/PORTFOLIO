import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { Coffee, Image, ServiceCards, Title } from "./style";

const faultOptions = {
  max: 45, // max tilt rotation (degrees)
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 250, // Speed of the enter/exit transition
};

const Ability = ({ index, title, icon }) => {
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
          <Image src={icon} alt={title} />
          <Title>{title}</Title>
        </Coffee>
      </ServiceCards>
    </Tilt>
  );
};

export default Ability;
