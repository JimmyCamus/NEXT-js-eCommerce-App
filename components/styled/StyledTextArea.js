import styled from "styled-components";

const StyledTextArea = styled.textarea`
  padding: 10px 15px;
  background: transparent;
  border-radius: 5px;
  margin: 10px;
  max-width: 300px;
  min-height: 250px;
  font-size: 18px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onInput};
  transition: all 0.3s ease;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.secondary};
    box-shadow: 0 0 10px #658db8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 280px) {
    & {
      max-width: 80%;
      height: 40px;
      font-size: 12px;
    }
  }
`;

export default StyledTextArea;
