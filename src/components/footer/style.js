import { styled } from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #01172c;
/* 
  @media only screen and (max-width: 450px) {
    position: relative;
    top: -1150px;
  } */
`;

export const Container = styled.div`
  width: 1300px;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0px 70px 0px;
  gap: 60px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 40px 20px 70px 20px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  flex: 1;
`;

export const Titles = styled.h1`
  color: #fff;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Span = styled.span`
  font-size: 32px;
  color: gold;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Texts = styled.p`
  color: #fff;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Call = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
`;

export const ListItem = styled.li`
  text-decoration: none;
  font-size: 18px;
  color: #fff;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Round = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Detail = styled(Links)`
  gap: 10px;
`;

export const Bigger = styled(Round)`
  padding: 6px 10px 6px 8px;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const Right = styled(Left)`
  gap: 15px;
`;

export const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 50%;
  background: transparent;
  /* width: 20px; */
  /* height: 20px; */
  padding: 3px 7px;
  color: #fff;

  @media only screen and (max-width: 768px) {
    border: 0.5px solid #fff;
  }
`;
