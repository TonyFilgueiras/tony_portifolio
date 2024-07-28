import React from 'react'
import ContentContainer from '../components/ContentContainer'
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../components/ContentHeader';

export default function EmailMeView() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = React.useState(false);
  const [isReturning, setIsReturning] = React.useState<boolean>(false);

  
  React.useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(true);
    }, 400);
  }, []);
  
  function handleReturnButtonClicked() {
    setIsReturning(true);
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(false);
      navigate("/");
    }, 400);
  }

  return (
    <ContentContainer isFlipping={isFlipping} isReturning={isReturning}><ContentHeader onReturnButtonClick={handleReturnButtonClicked} title='Email Me'/></ContentContainer>
  )
}
