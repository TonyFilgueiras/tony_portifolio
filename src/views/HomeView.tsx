import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const HomeViewContainer = styled.div`
  width: 30vw;
  /* height: 40vh; */
  padding: 20px;
`;

export default function HomeView() {
  return (
    <HomeViewContainer>
      {/* <Header title= {title}>
        {title && <ReturnButtonComponent/>}
        <HomeTitle>{title}</HomeTitle>
      </Header> */}
      <Outlet/>
    </HomeViewContainer>
  )
}
