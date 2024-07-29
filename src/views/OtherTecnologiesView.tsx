import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import React from "react";
import ContentHeader from "../components/ContentHeader";
import { otherTecnologies } from "../helpers/TonyTecnologies";

const OtherTecnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
`

const TecnologyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.text};

  &:hover{
    -webkit-filter: drop-shadow(-20px 5px 50px ${({ theme }) => theme.colors.text});
    filter: drop-shadow(-20px 5px 50px ${({ theme }) => theme.colors.text});

  }
`;

const TecnologyLogo = styled.img`
  width: 80px;
`

export default function OtherTecnologiesView() {
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
      <ContentHeader title="Other Tecnologies" onReturnButtonClick={handleReturnButtonClicked} /> 
      <OtherTecnologiesContainer>
      {otherTecnologies.map((tec)=>{
        return (
          <TecnologyItem title={tec.name} key={tec.name}>
            <TecnologyLogo src={tec.logo } />
          </TecnologyItem>
        )
      })}
      </OtherTecnologiesContainer>
    </ContentContainer>
  );
}
