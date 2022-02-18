import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0,0,0,1);
  width: 50%;

  @media screen and (max-width: 540px) {
    & {
      width: 75%;
    }
  }
`;

export default DescriptionContainer;