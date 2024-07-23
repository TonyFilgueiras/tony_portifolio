import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import flipAnimation from "../styles/animations/FlipAnimation";

const ListContainer = styled.ul<{ isflipping: boolean, isreturning: boolean }>`
  /* border: 1px solid pink; */
  animation: ${({ isflipping }) => (isflipping ? flipAnimation : "none")} 0.4s ${({isreturning})=> (isreturning? "reverse":  "forwards")} linear;
`;

const ListItem = styled.li`
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

export default function ContentContainer() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(false)
    }, 400);
  }, []);

  const handleItemClick = (navigateTo: string) => {
    setIsReturning(false)
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      navigate(navigateTo);
    }, 400); // Reset flip state after animation
  };
  return (
    <ListContainer isflipping={isFlipping} isreturning={isReturning}>
      <ListItem onClick={() => handleItemClick("about")}>About</ListItem>
      <ListItem onClick={() => handleItemClick("tecnologies")}>Tecnologies</ListItem>
      <ListItem onClick={() => handleItemClick("projects")}>Projects</ListItem>
      <ListItem onClick={() => handleItemClick("contact")}>Contact</ListItem>
    </ListContainer>
  );
}
