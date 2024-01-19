import { styled } from "styled-components";

export const Xazl = styled.div`
  width: fit-content;
  height: 100px;
  margin-top: 10px
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const A = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyleText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: ${({ left }) => left && "gold"};

  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const John = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 35px;
    height: 35px;
  }
`;
