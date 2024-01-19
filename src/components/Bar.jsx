import React, { useState } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 500px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid #fff;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Inner = styled.div`
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = ({ value = 0, borders }) => {
  const [percent, setPercent] = useState(value);
  const [per, setPer] = useState("#dd0a0a");
  const [border, setBorder] = useState(borders);

  useEffect(() => {
    if (percent < 10) {
      setPer("#9c0101");
    } else if (percent < 30 && percent > 9) {
      setPer("#f07035");
    } else if (percent < 45 && percent > 29) {
      setPer("#f8c727");
    } else if (percent < 70 && percent > 44) {
      setPer("yellow");
    } else if (percent < 85 && percent > 69) {
      setPer("#5add0e");
    } else {
      setPer("#5add0e");
      setPercent(100);
      setBorder(50);
    }
  }, [percent]);

  useEffect(() => {
    if (percent < 100) {
      setTimeout(() => setPercent((newVal) => newVal + 1), 70);
    }
  }, [percent]);

  return (
    <Box>
      <Inner
        style={{
          width: `${percent}%`,
          height: "30px",
          background: per,
          borderTopRightRadius: `${border}px`,
          borderBottomRightRadius: `${border}px`,
        }}
      >
        {percent}%
      </Inner>
    </Box>
  );
};

export default Bar;
