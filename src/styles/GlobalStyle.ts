import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-family: sans-serif;
  background-color: ${({ theme }) => theme.colors.bg};
  overflow: hidden;
}

a {
  text-decoration: none;
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
