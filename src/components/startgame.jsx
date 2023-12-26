import styled from "styled-components";
import Button from "../styles/button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img width={300} src="/images/dice1.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 96px;
      font-weight: 900;
      margin-bottom: 16px;
      
      @media (max-width: 768px) {
        font-size: 48px;
      }

      @media (max-width: 480px) {
        font-size: 32px;
      }
    }

    button {
      @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px 20px;
      }

      @media (max-width: 480px) {
        font-size: 12px;
        padding: 8px 16px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    .image-container {
      margin-bottom: 32px;
    }
  }
`;


