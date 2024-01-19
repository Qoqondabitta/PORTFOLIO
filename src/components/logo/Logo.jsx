import React from "react";
import xon from "../../assets/image/xon.jpg";
import { A, John, Style, StyleText, Xazl } from "./style";

const Logo = () => {
  return (
    <A href="#home">
      <Xazl>
        <John src={xon} alt="John" />
        <Style>
          <StyleText right="true">Abdulakhad</StyleText>
          <StyleText left="true">XON</StyleText>
        </Style>
      </Xazl>
    </A>
  );
};

export default Logo;
