import styled from "styled-components";

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & > div {
    margin: 0px 100px;
  }

  @media screen and (max-width: 1032px) {
    & {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    & > div {
      margin: 10px 0px;
    }
  }
`;

export default ProductPageContainer;
