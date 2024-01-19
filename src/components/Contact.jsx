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
import { motion } from "framer-motion";

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
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    /* width: 425px; */
  }
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0px;
    /* background: red; */
    height: 600px;
    align-items: center;
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
        <ContactRight>
          <Map />
        </ContactRight>
      </Container>
    </Section>
  );
};

export default Contact;
