import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import { device } from '../styles/Breakpoint';

const HomeViewContainer = styled.div`
  width: 30vw;
  /* height: 40vh; */
  padding: 20px;

  @media (${device.sm}) {
    width: 100vw;
    /* display: none; */
    /* border: 1px solid white; */
  }
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
