import Contact from "./components/Contact";
import Works from "./components/3D/Works";
import { styled } from "styled-components";
import Body from "./components/myBody/Body";
import About from "./components/About/ABlout";
import NavProvider from "./context/navContext";
import { useEffect } from "react";
import Question from "./components/Q&A/Question";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import MePart from "./components/Me/Me";

const Container = styled.div`
  height: 100vh;
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

function App() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      document.title = "See you soon back";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <Container>
      <NavProvider>
        <Body />
        <MePart />
        <About />
        <Works />
        <Experience />
        <Contact />
        <Question />
        <Footer />
      </NavProvider>
    </Container>
  );
}

export default App;
