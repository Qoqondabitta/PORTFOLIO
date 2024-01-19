import React from "react";
import {
  Bigger,
  Container,
  Detail,
  Left,
  Links,
  List,
  Right,
  Round,
  Section,
  Texts,
  Titles,
  ListItem,
  Link,
  Span,
  Update,
} from "./style";
import "./footer.css";
import { TitleSharp } from "../../utils/motion";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/Hammasi_Ota_Onam_Sababli", "_blank"); // Use 'tel://' protocol to open Telegram
  };
  const handleGitHubClick = () => {
    window.open(
      "https://github.com/Qoqondabitta?tab=overview&from=2023-04-01&to=2023-04-13",
      "_blank"
    ); // Use 'tel://' protocol to open Telegram
  };

  const handleInstaClick = () => {
    window.open(
      "https://www.instagram.com/samandarali01?igsh=MXJpd3RpNXl2ZDljdA==",
      "_blank"
    ); 
  };
  const handleEamil = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank"); 
  };
  
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/abdulakhad-turgunaliev-6577222aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    );
  };
  return (
    <Section>
      <Container>
        <Left style={{ flex: 1.5 }}>
          <Titles>
            Abdulakhad's <Span>Portfolio</Span>
          </Titles>
          <Texts>
            Thank you for visiting 👍 my personal portfolio website 💻. Connect
            with me over socials.
          </Texts>
          <Texts>Keep Rising 🚀. Stay Tuned, see you soon ✋</Texts>
          <Texts style={{ marginTop: "30px" }}>
            Designed with <FaHeart color="red" className="smalls" /> By
            <span style={{ color: "yellow" }}> Abdulakhad</span>
          </Texts>
          <Links>
            <Update>
              <Texts style={{ fontWeight: "200", fontSize: "12px" }}>C</Texts>
            </Update>
            <Texts style={{ fontWeight: "200", fontSize: "18px" }}> 2024</Texts>
          </Links>
        </Left>
        <Left>
          <Titles>
            Quick <Span>Links</Span>
          </Titles>
          <List>
            {TitleSharp.map((value, index) => (
              <Link key={index} href={value.href}>
                <Links className="wrap">
                  <Round className="in">
                    <IoIosArrowForward />
                  </Round>
                  <ListItem className="out">{value.title}</ListItem>
                </Links>
              </Link>
            ))}
          </List>
        </Left>
        <Left>
          <Titles>
            Contact <Span>Info</Span>
          </Titles>
          <Right>
            <Detail>
              <FaPhone size="1.3em" color="gold" />
              <Texts>+998-90-111-65-54</Texts>
            </Detail>
            <Detail>
              <MdEmail size="1.4em" color="gold" />
              <Texts>iamabdulakhad@gmail.com</Texts>
            </Detail>
            <Detail>
              <FaMapMarkedAlt size="1.4em" color="gold" />
              <Texts>+998-90-111-65-54</Texts>
            </Detail>
            <Detail>
              <Bigger onClick={handleGitHubClick} className="wraps">
                <FaGithub size="1.5em" color="black" className="inner" />
                <FaGithub size="1.5em" color="gold" className="outer" />
              </Bigger>
              <Bigger className="wraps" onClick={handleInstaClick}>
                <FaInstagram size="1.5em" color="gold" className="outer" />
                <FaInstagram size="1.5em" color="black" className="inner" />
              </Bigger>
              <Bigger onClick={handleTelegramClick} className="wraps">
                <FaTelegramPlane size="1.5em" color="gold" className="outer" />
                <FaTelegramPlane size="1.5em" color="black" className="inner" />
              </Bigger>
              <Bigger className="wraps" onClick={handleEamil}>
                <MdEmail size="1.5em" color="gold" className="outer" />
                <MdEmail size="1.5em" color="black" className="inner" />
              </Bigger>
              <Bigger className="wraps" onClick={handleLinkedin}>
                <FaLinkedin size="1.5em" color="gold" className="outer" />
                <FaLinkedin size="1.5em" color="black" className="inner" />
              </Bigger>
            </Detail>
          </Right>
        </Left>
      </Container>
    </Section>
  );
};

export default Footer;
