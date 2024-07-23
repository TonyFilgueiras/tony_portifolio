import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ReturnButton = styled.button`
  border-radius: 50%;
  border: 0px;
  background-color: transparent;
  height: 40px;
  width: 40px;
  line-height: 7px;
  transition: all.3s;

  &:hover{
    cursor: pointer;
    background-color: #00000010;
  }
`

export default function ReturnButtonComponent({...props} ) {
  return (
    <ReturnButton {...props}><ArrowBackIcon/></ReturnButton>
  )
}
