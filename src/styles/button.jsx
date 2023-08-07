import styled from "styled-components";

export const Button = styled.button`
  min-width: 13.75rem;
  padding: 10px 18px;
  border-radius: 0.3125rem;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  background: #000;
  color: #fff;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color:white;
border: 1px solid black;
color: black;
   &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

export default Button;

