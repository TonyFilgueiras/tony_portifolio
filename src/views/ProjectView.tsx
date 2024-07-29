import React from "react";
import styled, { keyframes } from "styled-components";
import ViewingProjectContext from "../contexts/ViewingProjectContext";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import hexToRgba from "../helpers/hexToRgba";
import tonyProjects, { Projects } from "../helpers/TonyProjects";
import CurrentThemeContext from "../contexts/CurrentThemeContext";
import tonyTecnologies from "../helpers/TonyTecnologies";
import { device } from "../styles/Breakpoint";

const slideIn = keyframes`
  from{
    left: 100%
  } 
  to {
    left:50%
  }
`;
const slideOut = keyframes`
  from{
    left: 50%
  } 
  to {
    left:100%
  }
`;

const ViewContainer = styled.div<{ slidingOut: boolean }>`
  padding: 20px;
  /* height: calc(100vh - 40px); */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(calc(-25vh - 50%), -50%);
  background: ${({ theme }) => hexToRgba(theme.colors.bg, 0.5)};
  /* border: 1px solid red; */
  text-align: center;
  border-radius: 25px;
  animation: ${({ slidingOut }) => (slidingOut ? slideOut : slideIn)} 2s forwards ease-out;

  @media (${device.md}) {
    transform: translate(-15vh, -75%);
  }
  @media (${device.sm}) {
    padding: 20px 0;
    transform: translate(50%, 0%);
    top: 0vh;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

`;

const Thumbnail = styled.img`
  width: 70vw;
  height: 50vh;

  @media (${device.sm}) {
    /* height: 100vh; */
    width: 100vw;
  }
`;

const Description = styled.h2`
  grid-column: 1 / span 2;
  padding: 20px 0;
  @media (${device.sm}) {
    font-size: 1rem;
  }
`;

const InformationContainer = styled.div`
  display: grid;
  grid-gap: 20px 10px;
  grid-template-columns: 1fr 3fr;
  @media (${device.sm}) {
    grid-template-columns: 0.5fr 2fr;
  }
  
`;

const InformationTitle = styled.h2`
  text-align: end;

  @media (${device.sm}) {
    font-size: 0.8rem;
  }
`;

const ProjectLink = styled.a`
  text-align: start;

  &:hover {
    text-decoration: underline;
  }
  @media (${device.sm}) {
    font-size: 0.8rem;
  }
`;

const InformationContent = styled.span`
  text-align: start;
  @media (${device.sm}) {
    font-size: 0.8rem;
  }
`;

export default function ProjectView() {
  const { setIsViewingProject } = React.useContext(ViewingProjectContext);
  const { changeTheme } = React.useContext(CurrentThemeContext);
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [slidingOut, setSlidingOut] = React.useState(false)
  const [project, setProject] = React.useState<Projects>();

  React.useEffect(() => {
    setIsViewingProject(true);
    const projectDisplayed = tonyProjects.find((proj) => proj.id == projectId);

    const chosenTheme = tonyTecnologies.find((tec) => tec.logo == projectDisplayed?.mainTecnologyLogo);

    changeTheme(chosenTheme!);

    setProject(projectDisplayed);

    console.log("oiaa")
  }, []);

  function returnButtonClicked() {
    setIsViewingProject(false);
    setSlidingOut(true)
    setTimeout(() => {
      navigate("/projects");
      
    }, 1000)
  }

  return (
    <ViewContainer slidingOut={slidingOut}>
      <ContentHeader onReturnButtonClick={returnButtonClicked} title={project?.name} />
      <Thumbnail src={project?.thumbnail} />
      <InformationContainer>
        <Description>{project?.about}</Description>
        <InformationTitle>Link:</InformationTitle>{" "}
        <ProjectLink target="_blank" rel="noopener noreferrer" href={project?.link}>
          {project?.link}
        </ProjectLink>
        <InformationTitle>Year:</InformationTitle>
        <InformationContent>{project?.year}</InformationContent>
        <InformationTitle>Tecnologies:</InformationTitle>
        <InformationContent>{project?.tecnologies.join(", ")}</InformationContent>
      </InformationContainer>
    </ViewContainer>
  );
}
