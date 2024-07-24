import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import hexToRgba from '../helpers/hexToRgba';

const ReturnButton = styled.button`
  border-radius: 50%;
  border: 0px;
  background-color: transparent;
  height: 40px;
  width: 40px;
  line-height: 7px;
  transition: all.3s;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => hexToRgba(theme.colors.text, 0.2)};
  }
`

export default function ReturnButtonComponent({ ...props }) {
  return (
    <ReturnButton {...props}><ArrowBackIcon/></ReturnButton>
  )
}
