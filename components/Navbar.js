import { useTheme } from "styled-components";
import StyledNavbar from "./styled/StyledNavbar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = ({ user }) => {
  const theme = useTheme();
  return (
    <StyledNavbar theme={theme}>
      <Logo />
      <NavLinks user={user} />
    </StyledNavbar>
  );
};

export default Navbar;
