import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Bar from "./Bar";
import { FadeLoader } from "react-spinners";
import { Html } from "@react-three/drei";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    gap: 20px;
  }
`;

const Load = () => {
  const [loading, setLoading] = useState(false);
  const color = "#fff";
  const [border, setBorder] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setProgress((val) => val + 1);
    }, 100);
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <Html>
      <Container>
        <h1>Loading...</h1>
        <FadeLoader color={color} loading={loading} size={100} />
        <Bar value={progress} borders={border} />
      </Container>
    </Html>
  );
};

export default Load;