import React from 'react';
import styled from 'styled-components';
import hexToRgba from '../helpers/hexToRgba';
import flipAnimation from '../styles/animations/FlipAnimation';
import { device } from '../styles/Breakpoint';

const StyledContentContainer = styled.div<{ isFlipping: boolean; isReturning: boolean }>`
  /* padding: 20px; */
  height: 100%;
  animation: ${({ isFlipping }) => (isFlipping ? flipAnimation : "none")} 0.4s ${({ isReturning }) => (isReturning ? "forwards" : "reverse")} linear;
  background-color: ${({ theme }) => hexToRgba(theme.colors.bg, 0.5)};
  border-radius: 5px;
  box-shadow: 0px 0px 50px 10px ${({ theme }) => hexToRgba(theme.colors.text, 0.1)};
  position: relative;
  z-index: 3;

  @media (${device.sm}) {
    overflow: visible;
  }
`;

interface ContentContainerProps {
  isFlipping: boolean;
  isReturning: boolean;
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ isFlipping, isReturning, children }) => {
  return (
    <StyledContentContainer isFlipping={isFlipping} isReturning={isReturning}>
      {children}
    </StyledContentContainer>
  );
};

export default ContentContainer;
