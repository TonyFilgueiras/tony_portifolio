import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text};
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const NotFoundView: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Ops...</NotFoundTitle>
      <NotFoundMessage>404 Page Not Found</NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFoundView;
