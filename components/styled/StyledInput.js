import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px 15px;
  background: transparent;
  border-radius: 5px;
  margin: 10px;
  max-width: 300px;
  height: 60px;
  font-size: 18px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onInput};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.secondary};
    box-shadow: 0 0 10px #658db8;
    transition: all 0.3s ease;
  }

  &:hover {
    background-color: ${(props) =>
      props.type == "submit" ? props.theme.primary : null};
    color: ${(props) =>
      props.type == "submit" ? props.theme.onPrimary : null};
    transition: all 0.3s ease;
    cursor: ${(props) => (props.type == "submit" ? "pointer" : "normal")};
  }

  @media screen and (max-width: 280px) {
    & {
      max-width: 80%;
      height: 40px;
      font-size: 12px;
    }
  }
`;

export default StyledInput;
