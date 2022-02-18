import { useTheme } from "styled-components";
import StyledFooter from "./styled/StyledFooter";
import StyledH3 from "./styled/StyledH3";

const Footer = () => {
  const theme = useTheme();

  return (
    <div>
      <StyledFooter theme={theme}>
        <StyledH3>Made by Jimmy</StyledH3>
      </StyledFooter>
    </div>
  );
};

export default Footer;
