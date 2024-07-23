import { keyframes } from "styled-components";

const flipAnimation = keyframes`
  0% { 
    transform: rotateY(0);

  }
  100% { transform: rotateY(90deg)
    scale(1.2) ;
    box-shadow: 10px 10px 10px 0px #00000022;
    }
`;

export default flipAnimation;
