import { styled, css } from "styled-components";

const gap = css`
  gap: 20px;
`;

const flex = css`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  height: 500vh;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const WhoSection = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  /* margin: 240px 0px 340px 0px; */
`;

const ContactSection = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const HeroSection = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const NavContainer = styled.div`
  width: 1400px;
  ${flex};
  justify-content: space-between;
  padding: 10px 0px;
`;

const HeroContainer = styled.div`
  width: 1400px;
  ${flex};
`;

const HeroLeft = styled.div`
  /* flex: 2; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  /* height: 90vh; */
  width: 560px;
  height: 682.87px;
  @media only screen and (max-width: 768px) {
    /* flex: 1; */
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 508px;
    width: 350px;
    background: red;
  }
`;

const HeroRight = styled.div`
  width: 840px;
  height: 682.87px;
  /* flex: 3; */
  position: relative;

  /* height: 90vh; */
  @media only screen and (max-width: 768px) {
    /* flex: 1; */
    /* width: 300px; */
    background: blue;

    height: 518px;
    width: 350px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 74px;
    line-height: 70px;
    /* padding: 5px; */
  }
`;

const What = styled.div`
  ${flex};
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const HeroSubtitle = styled.h2`
  color: #da4ea2;
`;

const HeroDescription = styled.p`
  font-size: 24px;
  margin-top: 20px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 70%;
    margin-top: 0px;
    /* padding: 0px 20px; */
  }
`;
const HeroAstronaut = styled.img`
  width: 800px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  align-items: center;
  display: flex;
  gap: 50px;
`;

const Icons = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;
const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5px;
  }
`;

// ===========================Work===================================

const WorkList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    gap: 5px;
  }
`;

const WorkListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    color: white;
    -webkit-text-stroke: 0px;
    text-align: center;
  }

  &::after {
    content: "${({ text }) => text}";
    color: pink;
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    /* color: white; */
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

// ===================Contact===============

const ContactTitle = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  /* background: yellow; */

  @media only screen and (max-width: 768px) {
    width: 300px;
    gap: 10px;
  }
`;
const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media only screen and (max-width: 450px) {
    position: relative;
    top: 80px;
  }
  /* background: red; */
  @media only screen and (max-width: 768px) {
    align-items: center;
    height: 528px;
    width: 350px;
    margin: 0 auto;
    justify-content: center;
  }
`;
const ContactRight = styled.div`
  flex: 1;
  /* background: blue; */

  @media only screen and (max-width: 768px) {
    height: 528px;
    width: 425px;
    display: none;
  };
  @media only screen and (max-width: 375px) {
  }
  
`;
const Input = styled.input`
  padding: 15px;
  font-size: 18px;
  background: #e8e6e6;
  width: 100%;
  color: black;
  border: none;
  /* width: 400px; */
  border-radius: 5px;
  outline: none;
  @media only screen and (max-width: 768px) {
    padding: 10px;
    width: 300px;
    font-size: 14px;
  }
`;
const TextArea = styled.textarea`
  background: #e8e6e6;
  font-size: 18px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  outline: none;
  color: black;

  @media only screen and (max-width: 768px) {
    padding: 15px;
    padding: 10px;
    width: 300px;
    font-size: 14px;
  }
`;

const Buttons = styled.button`
  width: 100%;
  padding: 20px;
  background: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    width: 300px;
    padding: 10px;
  }
`
// ====================Test=========================

const TestContainer = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`;

export {
  Container,
  Section,
  //   ===========Navbar
  NavContainer,
  NavSection,
  Links,
  Icons,
  Logo,
  List,
  ListItem,
  Icon,
  Button,
  //   =========Hero
  HeroContainer,
  HeroLeft,
  HeroRight,
  Line,
  HeroSubtitle,
  HeroDescription,
  What,
  HeroTitle,
  HeroAstronaut,
  HeroSection,
  ContactSection,
  //   =============Who
  WhoSection,
  WorkList,
  WorkListItem,
  //   ====================Contact
  ContactTitle,
  Buttons,
  Form,
  ContactLeft,
  ContactRight,
  Input,
  TextArea,
  // ================Test
  TestContainer,
};
