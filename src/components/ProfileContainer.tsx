import React from "react";
import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProfileContainerContainer = styled.div`
  text-align: center;
  width: 30vw;
  padding: 20px;
  color: ${({theme})=> theme.colors.text};
`;

export default function ProfileContainer() {
  return (
    <ProfileContainerContainer>
      <h1>Tony Filgueiras</h1>
      <h2>Fullstack Developer</h2>
      <LinkedInIcon fontSize="large"/>
      <GitHubIcon fontSize="large"/>
    </ProfileContainerContainer>
  );
}
