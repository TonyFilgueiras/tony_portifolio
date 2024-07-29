import { createGlobalStyle } from "styled-components";
import { device } from "./Breakpoint";

const GlobalStyle = createGlobalStyle`
body{
  transition: .3s;
  font-family: sans-serif;
  background-color: ${({ theme }) => theme.colors.bg};
  overflow: hidden;

  @media (${device.sm}) {
    overflow: visible;
  }
}

div, button, img, p, h1, h2, footer, span, a{
  transition: all.3s;
}

a {
  text-decoration: none;
}

h1, h2, img, button{
  position: relative;
  z-index: 3;
}

p, h1, h2, footer, span, a{
  color: ${({ theme }) => theme.colors.text}
}

span, a {
  font-size: 1.3rem
}

h1{
  font-weight: bold;
  font-size: 2rem;
}
h2{
  font-size: 1.3rem;
  font-weight: bold;
}

`;

export default GlobalStyle;
