import { styled } from "styled-components";

export const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 900px;
  }
`;

export const Container = styled.div`
  padding-top: 50px;
  /* scroll-snap-align: center; */
  width: 1300px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 450px) {
  }
  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 900px;
    gap: 40px;
    
    flex-direction: column;
    justify-content: space-between;
}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex: 1;

  @media only screen and (max-width: 768px) {
    width: 350px;
    align-items: center;
    gap: 15px;
    justify-content: flex-end;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    height: 350px;
    width: 350px;
    align-items: flex-end;
    position: relative;
  }
`;

export const BodyText = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 45px;
  }
`;

export const BodySpan = styled.span`
  font-size: 74px;
  color: gold;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
    text-align: center;
  }
`;

export const AnimateText = styled.p`
  font-size: 35px;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 20px;
    margin: 20px 0px;
  }
`;

export const Arrow = styled.img`
  width: 15px;
  height: 15px;
`;

export const BodyButton = styled.button`
  border-radius: 30px;
  border: none;
  color: #fff;
  background: blue;
  padding: 20px 50px;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;

  &:hover .ArrowWrap {
    transform: translateX(10px);
  }

  @media only screen and (max-width: 450px) {
    padding: 15px 20px;
    font-size: 14px;
  }
`;

export const ArrowWrap = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s ease;
  position: relative;
`;
export const Left = styled(Right)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 528px;
    width: 350px;
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 500px;
  object-fit: cover;
  object-position: top;
  position: relative;
  top: -10px;
  /* margin-bottom: 10px; */

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 25px;
    top: 145px;
    /* margin-top: 20px; */
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 50%;
  background-color: royalblue;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: red;
    color: black;
  }
`;
