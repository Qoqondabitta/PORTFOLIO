import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background: #01172c;
  height: fit-content;
  top: -40px;
  z-index: 100000;
  @media only screen and (max-width: 768px) {
    top: 0px;
  }
`;

export const Container = styled.div`
  height: fit-content;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  @media only screen and (max-width: 768px) {
    padding: 0px 0px 0px 15px;
    width: 370px;
    height: 70px;
    
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  list-style-type: none;
`;

export const Links = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

export const TopImage = styled.img`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000000;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

