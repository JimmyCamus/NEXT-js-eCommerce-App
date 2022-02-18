import styled from "styled-components";

const SalesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 50vw;
  margin: 50px 0;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.surfaceBorder};
  border-radius: 6px;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onSurface};

  @media screen and (max-width: 1200px) {
    & {
      width: 50vw;
      justify-content: center;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 912px) {
    & {
      width: 90vw;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export default SalesContainer;
