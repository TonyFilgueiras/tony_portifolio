import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: 16px;
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100vw;
`

export default function Footer() {
  return (
    <StyledFooter>© TonyFilgueiras</StyledFooter>
  )
}