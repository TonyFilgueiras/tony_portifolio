import React from "react";
import ContentContainer from "../components/ContentContainer";
import ContentHeader from "../components/ContentHeader";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tonyProjects from "../helpers/TonyProjects";
import ReturnButtonComponent from "../components/ReturnButton";

const ProjectButton = styled(ReturnButtonComponent)`
  position: absolute;
  right: 20px;
  opacity: 0;
  transform: rotate(180deg);
  transition: 0.7s;

  &:hover {
    background: transparent;
  }
`;

const MoreInfoSpan = styled.span`
  position: absolute;
  transition: all.7s;
  right: 40px;
  transform: scaleX(0);
  text-align: end;
  transform-origin: right;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 30px;
  padding: 20px;
  position: relative; /* Needed for absolute positioning of the button */
  transition: all 0.7s;
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

  &:hover ${ProjectButton} {
    opacity: 1;
  }

  &:hover ${MoreInfoSpan} {
    transform: scaleX(1) translateX(-20px);
  }
`;

const ProjectLogo = styled.img`
  height: 70px;
  position: relative;
  right: 50px;
  top: 30px;
`;

const ProjectView = styled.div`
  position: fixed;
  left: 100vw;
  top: 0;
  height: 100vh;

  width: 100vw;
`;

export default function ProjectsView() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState<boolean>(false);

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
      navigate(-1);
    }, 400);
  }

  function goToProjectPage(id: string) {
    navigate(id);
  }

  return (
    <ContentContainer isFlipping={isFlipping} isReturning={isReturning}>
      <ContentHeader title="Projects" onReturnButtonClick={handleReturnButtonClicked} />
      {tonyProjects.map((proj) => (
        <ProjectItem key={proj.name} onClick={() => goToProjectPage(proj.id)}>
          <ProjectLogo src={proj.mainTecnologyLogo} />
          {proj.name}
          <MoreInfoSpan>More Info</MoreInfoSpan>
          <ProjectButton />
        </ProjectItem>
      ))}
      <ProjectView>
        <Outlet />
      </ProjectView>
    </ContentContainer>
  );
}
