import { styled, keyframes } from "styled-components";

const sliding = keyframes`
0%{
  transform: translateX(100%);
}
100%{
  transform: translateX(50%);
}
`;

export const BurgerBox = styled.div`
  position: fixed;
  top: 70px;
  height: 100vh;
  width: 70%;
  background: #01172c;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  animation: ${sliding} 2s both;
`;

export const HamBurger = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const X = styled(HamBurger)`
  width: 20px;
  height: 20px;
  margin-right: 17px;
`;

export const ListItem = styled.li`
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  list-style-type: none;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Links = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;