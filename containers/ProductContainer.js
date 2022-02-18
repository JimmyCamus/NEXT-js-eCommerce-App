import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin: 30px 30px;
  min-width: 50%;
  max-width: 250px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.surfaceBorder};
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onSurface};

  &:hover {
    cursor: ${(props) => props.hover ? "pointer": "normal"};
    transform: ${(props) => props.hover ? "translateY(-2px)": null};
    box-shadow: ${(props) => props.hover ? "2px 2px 20px rgba(0, 171, 105, 0.3)": null};
  }
`;

export default ProductContainer;
