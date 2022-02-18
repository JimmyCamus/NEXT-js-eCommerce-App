import { useTheme } from "styled-components";
import Link from "next/link";
import StyledH1 from "./styled/StyledH1";

const Logo = () => {
  const theme = useTheme();
  return (
    <div style={{ color: theme.primary }}>
      <Link href="/">
        <a>
          <StyledH1>eCommerce</StyledH1>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
