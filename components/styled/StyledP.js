import styled from "styled-components";

const StyledP = styled.div`
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight ? props.fontWeight: null};
  display: ${(props) => (props.display ? props.display : null)};
  color: ${(props) => (props.color ? props.color : null)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "120%")};

  @media screen and (max-width: 540px) {
    & {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 280px) {
    & {
      font-size: 12px;
    }
  }
`;

export default StyledP;
