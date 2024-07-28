import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import ProfileContainer from "./components/ProfileContainer";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutView from "./views/AboutView";
import IndexView from "./views/IndexView";
import { theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import fadein from "./styles/animations/FadeInAnimation";
import OtherTecnologiesView from "./views/OtherTecnologiesView";
import tonyTecnologies, { Tecnologies } from "./helpers/TonyTecnologies";
import ProjectsView from "./views/ProjectsView";
import ProjectView from "./views/ProjectView";
import ViewingProjectContext from "./contexts/ViewingProjectContext";
import CurrentThemeContext from "./contexts/CurrentThemeContext";
import EmailMeView from "./views/EmailMeView";

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

const logoAnimation = keyframes`
  0% {   
    width: 0px;
    height: 0px;
  }
  100%{
      width: 80px;
      height: 80px;
    }
`;

const MainContainer = styled.div<{ isviewingproject: boolean }>`
  transition: 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: ${({ isviewingproject }) => (isviewingproject ? "translateX(calc(-100vw + 25vh))" : "translateX(0)")};
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

const Bubble = styled.div<{ x: number; y: number; delay: number }>`
  position: absolute;
  left: ${({ x }) => x}%;
  bottom: ${({ y }) => y}%;
  border-radius: 50%;
  border: 1px solid white;
  animation: ${bubbleAnimation} 10s ${({ delay }) => delay}s infinite ease-out;

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

const BubbleImg = styled.img<{ x: number; y: number; delay: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  animation: ${logoAnimation} 10s ${({ delay }) => delay}s infinite ease-out;
`;

const App: React.FC = () => {
  // const [themeColors, setThemeColors] = useState(theme);
  const { isViewingProject } = React.useContext(ViewingProjectContext);
  const { theme, changeTheme, bannerImg } = React.useContext(CurrentThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer isviewingproject={isViewingProject}>
        {tonyTecnologies.map((tec) => {
          return (
            <Bubble
              key={tec.name}
              delay={tec.animationDelay}
              x={tec.xPosition}
              y={tec.yPosition}
              onClick={() => {if (!isViewingProject) changeTheme(tec)}}
            >
              <BubbleImg delay={tec.animationDelay} x={tec.xPosition} y={tec.yPosition} src={tec.logo} />
            </Bubble>
          );
        })}
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
