import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game.</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice Image</p>
        <p>
          After clicking on dice if selected number is equal to the dice number
          you will get same number of points as shown on dice.
        </p>
        <p>if you make a wrong guess then 2 points will be deducted. </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
max-width:800px;
margin: 0 auto;
margin-top:40px;
border-radius:10px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 22px;
  }
  .text {
    margin-top: 24px;
  }
  p{
    line-height:30px;
    font-weight:500;
  }
`;
