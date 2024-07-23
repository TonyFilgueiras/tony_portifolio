import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import ProfileContainer from "./components/ProfileContainer";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutView from "./views/AboutView";
import ContentContainer from "./components/ContentContainer";
import { theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Bubble = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  width: 100px;
  z-index: -1;
  height: 100px;
  background-color: purple;
  border-radius: 50%;
`;

interface BubbleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const useBubbles = (count: number) => {
  const [bubbles, setBubbles] = useState<BubbleState[]>(() =>
    Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth /1.2,
      y: Math.random() * window.innerHeight/ 1.2,
      vx: (Math.random()) * 2,
      vy: (Math.random()) * 2,
    }))
  );

  useEffect(() => {
    let animationFrameId: number;
    const update = () => {
      setBubbles((bubbles) =>
        bubbles.map((bubble, i) => {
          let { x, y, vx, vy } = bubble;

          x += vx;
          y += vy;

          if (x < 0 || x > window.innerWidth - 100) vx = -vx;
          if (y < 0 || y > window.innerHeight - 100) vy = -vy;

          // bubbles.forEach((otherBubble, j) => {
          //   if (i !== j) {
          //     const dx = Math.abs(otherBubble.x - x)
          //     const dy = Math.abs(otherBubble.y - y)
          //     const distance = Math.sqrt(dx * dx + dy * dy);
          //     if (distance < 100) {
          //         vx = -vx
          //         vy = -vy;
          //     }
          //   }
          // });

          return { x, y, vx, vy };
        })
      );
      animationFrameId = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return bubbles;
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbles = useBubbles(5);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer ref={containerRef}>
        {bubbles.map((bubble, index) => (
          <Bubble key={index} x={bubble.x} y={bubble.y} />
        ))}
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
