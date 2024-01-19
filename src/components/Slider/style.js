import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  width: 450px;
  height: 580px;
  border: 2px solid white;
  cursor: pointer;
  
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;
