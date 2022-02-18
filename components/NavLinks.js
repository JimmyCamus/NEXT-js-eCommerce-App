import { isEmpty } from "lodash";
import { useTheme } from "styled-components";
import Link from "next/link";
import StyledButton from "./styled/StyledButton";
import StyledH3 from "./styled/StyledH3";

const NavLinks = ({ user }) => {
  const theme = useTheme();

  return (
    <div>
      {!isEmpty(user) ? (
        <div>
          <Link href="/cart">
            <a>
              <StyledButton
                backgroundColor={theme.background}
                color={theme.primary}
                borderColor={theme.background}
              >
                <StyledH3>Cart</StyledH3>
              </StyledButton>
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <StyledButton
                backgroundColor={theme.background}
                color={theme.primary}
                borderColor={theme.background}
              >
                <StyledH3>{user.data.name}</StyledH3>
              </StyledButton>
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/login" as={"/login"}>
            <a>
              <StyledButton
                backgroundColor={theme.background}
                color={theme.primary}
                borderColor={theme.background}
              >
                <StyledH3>Login</StyledH3>
              </StyledButton>
            </a>
          </Link>
          <Link href="/register" as={"/register"}>
            <a>
              <StyledButton
                backgroundColor={theme.background}
                color={theme.primary}
                borderColor={theme.background}
              >
                <StyledH3>Register</StyledH3>
              </StyledButton>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
