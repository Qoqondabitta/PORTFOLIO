import { styled } from "styled-components";

export const Round = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: orange;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 20px;
    bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Images = styled(Image)`
  object-position: top;
  width: 60px;
  height: 60px;

  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const QA = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: fit-content;
  position: absolute;
  z-index: 3000000000;
  left: 90px;
  bottom: 110px;
  background: rgb(223, 217, 217);
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 400px;
    left: 50px;
    bottom: 90px;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background: #fff;
  padding: 20px;
  width: fit-content;
  border-left: 8px solid #01172c;
  position: relative;
  top: -30px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 25px;
    top: -15px;
  }
`;

export const QAForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  outline: none;
  padding: 10px 20px 15px 20px;
  font-size: 18px;
  width: 350px;
  border: 1px solid grey;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    width: 250px;
    padding: 5px 10px 7.5px 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  background: #01172c;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  padding: 20px 0px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    width: 250px;
    padding: 10px;
  }
`;

export const Please = styled.p`
  font-size: 18px;
  padding: 30px 10px 50px 10px;
  color: #fff;
  background: #01172c;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 20px 10px 30px 10px;
  }
`;

export const Thanks = styled(Please)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px 0px;

  @media only screen and (max-width: 768px) {
    padding: 10px 0px;
  }
`;
