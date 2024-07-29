import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import circle from "../assets/tony.png";
import DefaultButton from "./DefaultButton";

const ProfileContainerContainer = styled.div`
  text-align: center;
  width: 30vw;
  padding: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 300px;
  border: 7px outset ${({ theme }) => theme.colors.text};
`;

const IconContainer = styled.div`
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export default function ProfileContainer() {
  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/antonio-mosquera/", "_blank");
  }

  function handleGitHubClick() {
    window.open("https://github.com/TonyFilgueiras", "_blank");
  }

  function handleDownloadClick() {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Replace with the correct path to your PDF file
    link.download = "Tony_Filgueiras_Resume.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <ProfileContainerContainer>
      <h1>Tony Filgueiras</h1>
      <h2>Fullstack Developer</h2>
      <ProfileImage src={circle} />
      <br />
      <IconContainer onClick={handleLinkedInClick} title="Linkedin">
        <LinkedInIcon fontSize="large" />
      </IconContainer>
      <IconContainer onClick={handleGitHubClick} title="GitHub">
        <GitHubIcon fontSize="large" />
      </IconContainer>
      <br />
      <DefaultButton text="Download Curriculum" onClick={handleDownloadClick} />
    </ProfileContainerContainer>
  );
}
