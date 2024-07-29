import styled from "styled-components";
import ReturnButtonComponent from "./ReturnButton";

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
`;

const HomeTitle = styled.h2`
  text-align: center;
  transform: translateX(-20px);
  z-index: 0;
  width: 100%;
`;

interface ContentHeaderProps {
  title?: string
  onReturnButtonClick: () => void;
}

export default function ContentHeader({ title, onReturnButtonClick }: ContentHeaderProps) {
  return (
    <Header>
      <ReturnButtonComponent onClick={onReturnButtonClick} />
      <HomeTitle>{title}</HomeTitle>
    </Header>
  );
}
