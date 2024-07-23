import React from "react";
import styled from "styled-components";
import ReturnButtonComponent from "../components/ReturnButton";
import flipAnimation from "../styles/animations/FlipAnimation";
import { useNavigate } from "react-router-dom";

const AboutViewContainer = styled.div<{ isFlipping: boolean, isReturning: boolean }>`
  height: 100%;
  animation: ${({ isFlipping }) => (isFlipping ? flipAnimation : "none")} 0.4s ${({isReturning})=> (isReturning? "forwards":  "reverse")} linear;
`;

const HomeTitle = styled.h2`
  text-align: end;
  /* border: 1px solid red; */
  width: 50%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ParagraphStyle = styled.p`
  text-indent: 20px;
  line-height: 1.5rem;
`

export default function AboutView() {
  const navigate = useNavigate()
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState(false);

  React.useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(true)
    }, 400);
  }, []);

  function handleReturnButtonClicked() {
    setIsReturning(true)
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(false)
      navigate(-1)
    }, 400);
  }

  return (
    <AboutViewContainer isFlipping={isFlipping} isReturning={isReturning}>
      <Header>
        <ReturnButtonComponent onClick={handleReturnButtonClicked} />
        <HomeTitle>About</HomeTitle>
      </Header>
      <ParagraphStyle>My name is Antonio Filgueiras, and I'm a Fullstack developer that has a passion for coding. 
      </ParagraphStyle>
    </AboutViewContainer>
  );
}
