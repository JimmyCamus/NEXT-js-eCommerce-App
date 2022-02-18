import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 32px;
  display: ${(props) => (props.display ? props.display : null)};
  color: ${(props) => (props.color ? props.color : null)};

  @media screen and (max-width: 540px) {
    & {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 280px) {
    & {
      font-size: 16px;
    }
  }
`;

export default StyledH1;
