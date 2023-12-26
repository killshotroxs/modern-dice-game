import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
    img {
      max-width: 100%; // Ensure image is not larger than the container
      height: auto;
    }
  }

  p {
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  // Adjust margin for smaller screens
  @media (max-width: 768px) {
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    margin-top: 16px;
  }
`;
