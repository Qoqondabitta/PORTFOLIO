import React from "react";
import { Container, Title, TitleWrapper } from "./style";
import { FaBusinessTime } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GiTeacher } from "react-icons/gi";
import "react-vertical-timeline-component/style.min.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import useNav from "../../hooks/useNav";

const Experience = () => {
  const expRef = useNav("Experience");
  return (
    <div ref={expRef} id="experience">
      <Container>
        <TitleWrapper>
          <FaBusinessTime size="3em" />
          <Title>Experience</Title>
        </TitleWrapper>
        <VerticalTimeline lineColor="gold">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{
              background: "gold",
              color: "black",
            }}
            icon={<FaChalkboardTeacher size="3em" />}
            date="2022 May - 2022 Sep"
          >
            <h2>
              Mars IT School 🏫
              <p>
                Support Teacher 👨‍🏫 for students learning JavaScript and React JS
                technologies 👨‍💻.
              </p>
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "gold", color: "black" }}
            icon={<FaChalkboardTeacher />}
            date="2022 July - 2022 Sep"
          >
            <h2>
              Web-Brain IT Academy 🏛️
              <p>
                Support Teacher 👨‍🏫 for students learning HTML, CSS and
                JavaScript programming languages 👨‍💻.
              </p>
            </h2>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "gold", color: "black" }}
            icon={<GiTeacher size="4em" />}
            date="2022 Mar - 2022 Oct"
          >
            <h2>
              FL TV Channel 📺
              <p>
                Founder of TV Programm 📺 called "IT Lesson", writing scenarios
                📜 and preparing slides 📹.
              </p>
            </h2>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Experience;
