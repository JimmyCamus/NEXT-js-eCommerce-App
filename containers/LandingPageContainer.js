import styled from "styled-components";

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 540px) {
    & {
      flex-direction: column;
    }
  }
`;

export default LandingPageContainer;
