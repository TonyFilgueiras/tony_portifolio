import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import ProfileContainer from "./components/ProfileContainer";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutView from "./views/AboutView";
import ContentContainer from "./components/ContentContainer";
import { theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";

import reactLogo from "./assets/reactLogo.png"
import jsLogo from "./assets/jsLogo.png"
import pythonLogo from "./assets/pythonLogo.png"
import tsLogo from "./assets/tsLogo.png"
import vueLogo from "./assets/vueLogo.png"

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const bubbleAnimation = keyframes`
  0% {
    width: 0px;
    height: 0px;
    transform: translate(0, 0);
  }
  100% {
    width: 100px;
    height: 100px;
    transform: translate(0, -100px);
  }
`;

const Bubble = styled.img<{ x: number; y: number, delay: number }>`
  position: absolute;
  left: ${({ x }) => x}%;
  bottom: ${({ y }) => y}%;
  width: 0px;
  padding: 20px;
  height: 0px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 100%;
  animation: ${bubbleAnimation} 10s ${({delay})=>delay}s infinite ease-out ;

  &::after{
    content: "";
    position: absolute;
    top: 20%;
    left: 20%;
    width: 10%;
    height: 10%;
    border-radius: 50%;
    background-color: white;
  }
`;

const App: React.FC = () => {
  const [themeColors, setThemeColors] = useState(theme)

  function changeThemeColors(text: string, bg: string, hover: string) {
    setThemeColors({ colors:{ text, bg, hover } })
  }

  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyle />
      <MainContainer >
        <Bubble delay={0} x={10} y={50} src={reactLogo} onClick={()=>changeThemeColors("#05c2cf", "#150074","#0000ff")}/>
        <Bubble delay={1} x={20} y={5} src={jsLogo} onClick={()=>changeThemeColors("#000000", "#d6e600","#0000ff")}/>
        <Bubble delay={1.4} x={40} y={73} src={pythonLogo} onClick={()=>changeThemeColors("#fffb00", "#060057","#0000ff")}/>
        <Bubble delay={0.5} x={60} y={5} src={tsLogo} onClick={()=>changeThemeColors("#0026ff", "#ffffff","#0000ff")}/>
        <Bubble delay={1.7} x={80} y={43} src={vueLogo} onClick={()=>changeThemeColors("#017507", "#01025c","#0000ff")}/>
        <ProfileContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />}>
              <Route index element={<ContentContainer />} />
              <Route path="about" element={<AboutView />} />
              <Route path="tecnologies" element={<AboutView />} />
              <Route path="projects" element={<AboutView />} />
              <Route path="contact" element={<AboutView />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
