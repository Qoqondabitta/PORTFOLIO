import { styled } from "styled-components";

export const HeadText = styled.p`
  color: #fff;
  font-weight: 900;
  font-size: 30px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SubText = styled.p`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const Container = styled.div`
  padding-bottom: 30px;
  width: 1300px;
  height: 170vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  @media only screen and (max-width: 450px) {
    position: relative;
    top: -300px;
  }
  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 4700px;
    margin-top: 0px;
  }
`;

export const AboutText = styled.p`
  color: #fff;
  font-size: 17px;
  width: 100%;
  margin-top: -10px;
  text-align: center;
  line-height: 30px;
`;

export const AboutBox = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;
`;

export const ServiceCards = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4a17c0, #01172c);
  border: 1px solid #fff;
  padding: 1px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    margin-left: 30px;
    width: 140px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const Box = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
  margin: 0 auto;
  height: 60vh;
  @media only screen and (max-width: 768px) {
    width: 350px;
    justify-content: center;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;

  @media only screen and (max-width: 768px) {
    gap: 15px;
  }
`;

export const Bunker = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  /* background: red; */

  @media only screen and (max-width: 768px) {
    height: fit-content;
    width: 370px;
    justify-content: flex-start;
    gap: 0px;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 300px;
  border-radius: 20px;

  @media only screen and (max-width: 768px) {
    border-radius: 10px;
    width: 140px;
    height: 100px;
    gap: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;

  @media only screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;
