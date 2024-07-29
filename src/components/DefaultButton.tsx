import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &{
  text: string
}

const DefaultButtonContainer = styled.button`
  transition: all.3s;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.bg};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default function DefaultButton({text, ...props}: Props) {
  return (
    <DefaultButtonContainer {...props}>{text}</DefaultButtonContainer>
  )
}