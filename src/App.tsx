import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import ProfileContainer from "./components/ProfileContainer";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutView from "./views/AboutView";
import IndexView from "./views/IndexView";
import GlobalStyle from "./styles/GlobalStyle";
import fadein from "./styles/animations/FadeInAnimation";
import OtherTecnologiesView from "./views/OtherTecnologiesView";
import tonyTecnologies, { Tecnologies } from "./helpers/TonyTecnologies";
import ProjectsView from "./views/ProjectsView";
import ProjectView from "./views/ProjectView";
import ViewingProjectContext from "./contexts/ViewingProjectContext";
import CurrentThemeContext from "./contexts/CurrentThemeContext";
import EmailMeView from "./views/EmailMeView";
import { device } from "./styles/Breakpoint";

const bubbleAnimation = keyframes`
  0% {
    width: 0px;
    height: 0px;
    padding: 0px;
    transform: translate(0, 0);
  }
  100% {
    width: 100px;
    height: 100px;
    padding: 10px;
    transform: translate(0, -100px);
  }
`;

const bubblePop = keyframes`
  0% {
    opacity: 1;
    /* transform: scale(1); */
  }
  50%{
    opacity: 0;
    
  }
  100% {
    opacity: 0;
    transform: scale(10.5);
  }
`;

const MainContainer = styled.div<{ isviewingproject: boolean }>`
  transition: 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: ${({ isviewingproject }) => (isviewingproject ? "translateX(calc(-100vw + 25vh))" : "translateX(0)")};

  @media (${device.sm}) {
    /* padding: 10px 0; */
    /* padding-bottom: 100px; */
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    /* border: 1px solid red; */
    width: 100vw;
    overflow-x: hidden;
    overflow-y: visible;

    transform: ${({ isviewingproject }) => (isviewingproject ? "translate(0, -70vh)" : "translate(0,0)")};
  }
`;

const TecnologyBanner = styled.img`
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  transform: translate(20%, 20%);
  height: 50vh;
  width: auto;
  -webkit-filter: drop-shadow(-20px 5px 50px ${({ theme }) => theme.colors.text});
  filter: drop-shadow(-20px 5px 50px ${({ theme }) => theme.colors.text});
  animation: ${fadein} 2s forwards linear;
`;

const Bubble = styled.div<{ x: number; y: number; delay: number; popped: boolean }>`
  position: absolute;
  padding: 20px;
  left: ${({ x }) => x}%;
  bottom: ${({ y }) => y}%;
  border-radius: 50%;
  border: 1px solid white;
  animation: ${({ popped }) => (popped ? bubblePop : bubbleAnimation)} ${({ popped }) => (popped ? "1s" : "10s")}
    ${({ popped }) => (popped ? "forwards" : "infinite")} ease-out;
  /* animation-delay: ${({ popped, delay }) => (popped ? "0s" : `${delay}s`)}; */
  /* opacity: ${({ popped }) => (popped ? 0 : 1)}; */

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 20%;
    width: 10%;
    height: 10%;
    border-radius: 50%;
    background-color: white;
  }

  &:hover {
    cursor: crosshair;
  }
`;

const BubbleImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
`;

const App: React.FC = () => {
  const { isViewingProject } = React.useContext(ViewingProjectContext);
  const { theme, changeTheme, bannerImg } = React.useContext(CurrentThemeContext);
  const [poppedBubbles, setPoppedBubbles] = useState<{ [key: string]: boolean }>({});

  function popBubble(tecnology: Tecnologies) {
    changeTheme(tecnology);
    setPoppedBubbles((prev) => ({ ...prev, [tecnology.name]: true }));
    setTimeout(() => {
      setPoppedBubbles((prev) => ({ ...prev, [tecnology.name]: false }));
    }, 1000);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer isviewingproject={isViewingProject}>
        {tonyTecnologies.map((tec) => (
          <Bubble
            key={tec.name}
            popped={poppedBubbles[tec.name] || false}
            delay={tec.animationDelay}
            x={tec.xPosition}
            y={tec.yPosition}
            onClick={() => {
              if (!isViewingProject) popBubble(tec);
            }}
          >
            <BubbleImg src={tec.logo} />
          </Bubble>
        ))}
        <ProfileContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />}>
              <Route index element={<IndexView />} />
              <Route path="about" element={<AboutView />} />
              <Route path="tecnologies" element={<OtherTecnologiesView />} />
              <Route path="projects" element={<ProjectsView />}>
                <Route path=":projectId" element={<ProjectView />} />
              </Route>
              <Route path="emailme" element={<EmailMeView />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <TecnologyBanner key={bannerImg} src={bannerImg} />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
