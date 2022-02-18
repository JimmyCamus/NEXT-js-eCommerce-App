import styled from "styled-components";

const StyledButton = styled.button`
  padding: 3px 10px;
  margin: 10px 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 5px;
  font-size: 16px;
  min-width: 130px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};

  &:hover {
    transition: all 0.5s ease;
    color: ${(props) => props.backgroundColor};
    background-color: ${(props) => props.color};
  }

  @media screen and (max-width: 540px) {
    & {
      max-width: 100px;
      min-width: 10px;
    }
  }
`;

export default StyledButton;
