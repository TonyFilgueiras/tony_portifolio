import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ContentContainer from "../components/ContentContainer";
import React from "react";
import ContentHeader from "../components/ContentHeader";
import { otherTecnologies } from "../helpers/TonyTecnologies";
import hexToRgba from "../helpers/hexToRgba";
import CurrentThemeContext from "../contexts/CurrentThemeContext";

const OtherTecnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
`;

const TecnologyItem = styled.div`
  position: relative; /* Added to ensure hover container is positioned relative to this item */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.text};

  &:hover {
    cursor: pointer;
    -webkit-filter: drop-shadow(0px 0px 50px ${({ theme }) => theme.colors.text});
    filter: drop-shadow(0px 0px 50px ${({ theme }) => theme.colors.text});

    /* Show the hover container on hover */
    div {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const TecnologyLogo = styled.img`
  width: 80px;
`;

const TecnologyHoverContainer = styled.div`
  position: absolute; /* Added to cover the entire TecnologyItem */
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme})=> theme.colors.text};
  background-color: #00000088;
  transform: scaleX(0);
  opacity: 0; /* Hidden by default */
  transition: 0.3s ease-in; /* Smooth transition */
`;

export default function OtherTecnologiesView() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState(false);
  const { changeTheme } = React.useContext(CurrentThemeContext);

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
      <ContentHeader title="Other Tecnologies" onReturnButtonClick={handleReturnButtonClicked} />
      <OtherTecnologiesContainer>
        {otherTecnologies.map((tec) => {
          return (
            <TecnologyItem title={tec.name} key={tec.name} onClick={()=> changeTheme(tec)}>
              <TecnologyLogo src={tec.logo} />
              <TecnologyHoverContainer><h2>{tec.name}</h2></TecnologyHoverContainer>
            </TecnologyItem>
          );
        })}
      </OtherTecnologiesContainer>
    </ContentContainer>
  );
}
