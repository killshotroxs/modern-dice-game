import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => NumberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    gap: 12px; // Reduced gap for smaller default sizes

    @media (max-width: 768px) {
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  
  p {
    font-size: 24px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .error {
    color: red;
    margin-bottom: 5px;
    font-weight: 450;
    align-self: stretch; // Stretch error message to take full width if needed
    text-align: center;
  }
`;

const Box = styled.div`
  cursor: pointer;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 768px) {
    height: 60px; // Adjusted for smaller screen
    width: 60px; // Adjusted for smaller screen
    font-size: 18px; // Adjusted font size
  }

  @media (max-width: 480px) {
    height: 48px; // Further adjustment for small screens
    width: 48px; // Further adjustment for small screens
    font-size: 16px; // Further adjustment for font size
  }
`;
