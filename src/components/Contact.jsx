import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Buttons,
  ContactLeft,
  Form,
  Input,
  TextArea,
  ContactRight,
} from "../../style";
import Map from "./Map";
import { styled } from "styled-components";
import useNav from "../hooks/useNav";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Title, TitleWrapper } from "./experience/style";
// import { motion } from "framer-motion";
import it from "../assets/additional/it.jpg";
import { Tilt } from "react-tilt";


const opt = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 450px) {
    position: relative;
    top: -200px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 850px;
    align-items: space-between;
    /* background: red; */
    /* gap: 50px; */
  }
`;

export const Technologist = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  display: none;
  object-fit: cover;
  margin: 0 auto;

  @media only screen and (max-width: 450px) {
    display: block;
  }
`;

const divAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

const staggerContainer = {
  hidden: { x: -300, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.7 },
  }),
};

const Contact = () => {
  const contactRef = useNav("Contact");
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9as0mm",
        "template_zkkt8rq",
        formRef.current,
        "bSCe1q9V063Rr93D2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Section ref={contactRef} id="contact">
      <Container>
        <ContactLeft>
          <Form className="vasya" ref={formRef} onSubmit={sendEmail}>
            <TitleWrapper>
              <TfiHeadphoneAlt size="3em" />
              <Title>Get In </Title>
              <Title style={{ color: "#da4ea2" }}>Touch</Title>
            </TitleWrapper>
            <Input type="text" placeholder="Name" name="from_name" />
            <Input type="email" placeholder="Your Email" name="email" />
            <TextArea
              placeholder="Write Your Message"
              rows={10}
              name="message"
            />
            <Buttons type="submit">Send</Buttons>
          </Form>
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={staggerContainer}
          >
            <Form className="ivan" ref={formRef} onSubmit={sendEmail}>
              <TitleWrapper>
                <TfiHeadphoneAlt size="3em" />
                <Title>Get In </Title>
                <Title style={{ color: "#da4ea2" }}>Touch</Title>
              </TitleWrapper>
              <Input type="text" placeholder="Name" name="from_name" />
              <Input type="email" placeholder="Your Email" name="email" />
              <TextArea
                placeholder="Write Your Message"
                rows={10}
                name="message"
              />
              <Buttons type="submit">Send</Buttons>
            </Form>
          </motion.div> */}
        </ContactLeft>

        <Tilt
          className="titleThree"
          options={opt}
          style={{
            height: "300px",
            width: "400px",
            margin: "0 auto",
          }}
        >
          <Technologist src={it} />
        </Tilt>
        <ContactRight>
          <Map />
        </ContactRight>
      </Container>
    </Section>
  );
};

export default Contact;
