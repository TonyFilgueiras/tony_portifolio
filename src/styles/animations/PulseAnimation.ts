import { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50%{
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
`;

export default pulseAnimation;
