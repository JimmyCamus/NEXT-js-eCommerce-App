import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  height: 70px;
  padding: 0 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.background};
  width: 100%;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

export default StyledNavbar;
