import { keyframes, styled } from "styled-components";
import body from "../../assets/additional/body.mp4";

const rotateInf = keyframes`
to {
  transform: rotate(360deg);

}
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;

  @media only screen and (max-width: 450px) {
    position: relative;
    top: -100px;
  }

  @media only screen and (max-width: 768px) {
    height: 250vh;
    gap: 30px;

    margin-top: -50px;
  }
`;

export const Container = styled.div`
  width: 1300px;
  height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 140vh;
    /* background: red; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 450px;
  height: 580px;
  border: 2px solid white;
  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;

export const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 585px;

  @media only screen and (max-width: 768px) {
    width: 370px;
    padding: 20px;
    flex: inherit;
    height: 550px;
    padding: 0px 30px;
  }
`;

export const Left = styled.div`
  flex: 2.5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 350px;
    align-items: flex-start;
  }
`;

export const Round = styled.div`
  border-radius: 50%;
  width: 155px;
  height: 155px;
  background: #fff;
  position: absolute;
  right: 10px;
  bottom: -200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  @media only screen and (max-width: 768px) {
    right: 5px;
    bottom: 10px;
    width: 100px;
    height: 100px;
  }
`;

export const Relative = styled.div`
  position: relative;
  animation: ${rotateInf} 5s linear infinite;
`;

export const Next = styled.div`
  position: absolute;
  top: -30px;
  left: 45px;

  @media only screen and (max-width: 768px) {
    left: 20px;
    top: -20px;
  }
`;

export const RotatingText = styled.span`
  height: 5rem;
  /* width: 2rem; */
  position: absolute;
  left: 10%;
  top: 10%;
  font-size: 20px;
  transform-origin: bottom center;
  transform: rotateZ(calc(var(--i) * 140deg));

  @media only screen and (max-width: 768px) {
    height: 3rem;
    left: -30%;
    // top: -10%;
    font-size: 16px;
  }
`;

export const Small = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Duplicate = styled(Small)`
  position: absolute;
  width: 110px;
  height: 110px;
  z-index: 1000;

  @media only screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SpaN = styled.span`
  color: gold;

  font-size: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Sub = styled.h2`
  color: yellow;
  font-size: 40px;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Button = styled.input`
  border-radius: 5px;
  padding: 10px 50px;
  border: none;
  background: blue;
  font-size: 20px;
  color: #fff;

  @media only screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;
