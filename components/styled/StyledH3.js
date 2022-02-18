import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: 18.72px;
  display: ${(props) => (props.display ? props.display : null)};
  color: ${(props) => (props.color ? props.color : null)};

  @media screen and (max-width: 540px) {
    & {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 280px) {
    & {
      font-size: 12px;
    }
  }
`;

export default StyledH3;
