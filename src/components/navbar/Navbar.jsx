import React from "react";
import {
  Container,
  Links,
  List,
  ListItem,
  Section,
  TopImage,
} from "./style";
import "./design.css";
import { useContext } from "react";
import { NavContext } from "../../context/navContext";
import Logo from "../logo/Logo";
import Burger from "../burger/Burger";
import { TitleSharps } from "../../utils/motion";
import top from "../../assets/image/top.jpg";

const Navbar = () => {
  const { activeLinkId } = useContext(NavContext);

  const RenderNavLink = (content) => {
    const scrollToId = `${content.title.toLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        // .scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ListItem key={content.title}>
          <Links href={content.href}>
            <button
              href={`#${scrollToId}`}
              className={activeLinkId === content.title ? "activeClass" : ""}
              onClick={handleClickNav}
            >
              {content.title}
            </button>
          </Links>
        </ListItem>
    );
  };

  return (
    <Section>
      <Container className="cont">
        <Logo />
        <List className="vay" id="iya">
          {TitleSharps.map((value) => RenderNavLink(value))}
        </List>
        <Burger />
      </Container>
      {top && (
          <Links href="#home">
            <TopImage src={top} className="class" />
          </Links>
      )}
    </Section>
  );
};

export default Navbar;