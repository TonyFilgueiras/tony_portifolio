import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";

const ListItem = styled.div`
  padding: 20px;
  transition: all.7s;
  background: linear-gradient(-90deg, transparent 50%, ${({ theme }) => theme.colors.text});
  background-size: 400%;
  background-position: 100%;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px 0px #00000022;
    transform: translate(-2px, -2px);
    background-position: 10%;
    color: ${({ theme }) => theme.colors.bg};
  }
`;

export default function IndexView() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(true)
    }, 400);
  }, []);

  const handleItemClick = (navigateTo: string) => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      navigate(navigateTo);
    }, 400); // Reset flip state after animation
  };
  return (
    <ContentContainer isFlipping={isFlipping} isReturning={isReturning}>
      <ListItem onClick={() => handleItemClick("about")}>About</ListItem>
      <ListItem onClick={() => handleItemClick("tecnologies")}>Other Tecnologies</ListItem>
      <ListItem onClick={() => handleItemClick("projects")}>Projects</ListItem>
      <ListItem onClick={() => handleItemClick("emailme")}>Email Me</ListItem>
    </ContentContainer>
  );
}
