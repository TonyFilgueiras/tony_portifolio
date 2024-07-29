import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import ContentHeader from "../components/ContentHeader";

const ParagraphStyle = styled.p`
  text-indent: 20px;
  line-height: 1.5rem;
  text-shadow: 2px 5px 5px ${({ theme }) => theme.colors.bg};
  padding: 20px;
`;

export default function AboutView() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState(false);

  React.useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(true);
    }, 400);
  }, []);

  function handleReturnButtonClicked() {
    setIsReturning(true);
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(false);
      navigate("/");
    }, 400);
  }

  return (
    <ContentContainer isFlipping={isFlipping} isReturning={isReturning}>
      <ContentHeader title="About" onReturnButtonClick={handleReturnButtonClicked}/>
      <ParagraphStyle>My name is Antonio Filgueiras, and I'm a full-stack developer with a passion for coding. I'm currently graduating in Computer Science and working on personal projects to pass the time. I'm also a musician and a gamer in my spare time.</ParagraphStyle>
    </ContentContainer>
  );
}
