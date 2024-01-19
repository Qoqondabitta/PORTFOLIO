import React from 'react'
import { Container } from './style'
import "./slider.css"
import { Tilt } from "react-tilt";


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

const Slider = () => {
  return (
    <Tilt
      options={opt}
      style={{
        height: "450px",
        width: "580px",
        "@media only screen and (maxWidth: 768px)": {
          width: "300px",
          height: "400px",
          margin: "0 auto",
        },
      }}
    >
      <Container className="test"></Container>
    </Tilt>
  );
}

export default Slider