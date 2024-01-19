import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { TextArea } from "../../../style";
import {
  Button,
  FormWrap,
  Please,
  QA,
  QAForm,
  Thanks,
  Input,
  Round,
} from "./style";
import { IoChatbubble } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Question = () => {
  const formatRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [text, setText] = useState("Thank You For Reaching Us Out")
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow(!show);
    setText("Thank You For Reaching Us Out");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9as0mm",
        "template_zkkt8rq",
        formatRef.current,
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

  const deleteInfo = () => {
    nameRef.current.value = "";
    messageRef.current.value = "";
    emailRef.current.value = "";
    setText("Thank you for your message")
    // setShow(!show)
  };
  return (
    <>
      <Round onClick={Show}>
        {show ? <IoClose color="white" size="4em" className="oppsoite"/> : <IoChatbubble color="white" size="3em" className="oppsoite"/>}
        {show ? <IoClose color="white" size="2em" className="unique"/> : <IoChatbubble color="white" size="1.5em" className="unique"/>}
      </Round>
      {show && (
        <QA>
          <Please>
            Please fill out the form below and we will get back with you as soon
            as possible.
          </Please>
          <FormWrap>
            <QAForm ref={formatRef} onSubmit={sendEmail}>
              <Input
                ref={nameRef}
                type="text"
                placeholder="* Name"
                name="from_name"
              />
              <Input
                ref={emailRef}
                type="email"
                placeholder="* Email"
                name="email"
              />
              <TextArea
                ref={messageRef}
                name="message"
                rows={5}
                placeholder="* Message"
                style={{
                  fontSize: "18px",
                  background: "#fff",
                  border: "1px solid grey",
                }}
              />
            </QAForm>
            <Button type="submit" onClick={deleteInfo}>
              Send
            </Button>
          </FormWrap>
          <Thanks>{text}</Thanks>
        </QA>
      )}
    </>
  );
};

export default Question;
