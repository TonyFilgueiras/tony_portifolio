import styled from 'styled-components'
import { device } from '../styles/Breakpoint'

const StyledFooter = styled.footer`
  font-size: 16px;
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100vw;

  @media (${device.sm}) {
    position: static;
    /* border: 1px solid white; */
  }
`

export default function Footer() {
  return (
    <StyledFooter>© TonyFilgueiras</StyledFooter>
  )
}