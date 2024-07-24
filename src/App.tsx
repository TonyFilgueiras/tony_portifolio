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
import pulseAnimation from "./styles/animations/PulseAnimation";
import TecnologiesView from "./views/TecnologiesView";
import tonyTecnologies from "./helpers/TonyTecnologies";

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

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TecnologyBanner = styled.img`
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  transform: translate(20%, 20%);
  height: 100vh;
  width: auto;
  -webkit-filter: drop-shadow(-20px 5px 50px ${({ theme }) => theme.colors.text});
  filter: drop-shadow(-20px 5px 50px ${({ theme }) => theme.colors.text});
  animation: ${fadein} 2s forwards linear, ${pulseAnimation} 2s 2s infinite;
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
  const [themeColors, setThemeColors] = useState(theme);
  const [bannerImg, setBannerImg] = useState("");

  function changeThemeColors(text: string, bg: string, banner: string) {
    setThemeColors({ colors: { text, bg } });
    setBannerImg(banner);
  }

  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyle />
      <MainContainer>
        {tonyTecnologies.map((tec) => {
          return (
            <Bubble key={tec.name } delay={tec.animationDelay} x={tec.xPosition} y={tec.yPosition} onClick={() => changeThemeColors(tec.textColor, tec.bgColor, tec.banner)}>
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
              <Route path="tecnologies" element={<TecnologiesView />} />
              <Route path="projects" element={<AboutView />} />
              <Route path="contact" element={<AboutView />} />
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
