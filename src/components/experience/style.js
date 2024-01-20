import { styled } from "styled-components";

export const Container = styled.div`
  width: 1300px;
  height: 100vh;
  @media only screen and (max-width: 450px) {
    position: relative;
    top: -350px;
    height: 732px;
  }
  @media only screen and (max-width: 768px) {
    width: 350px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 45px;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  } 
`;