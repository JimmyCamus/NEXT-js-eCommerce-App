import useHandleLogout from "../hooks/useHandleLogout";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import SalesContainer from "../containers/SalesContainer";
import StyledButton from "./styled/StyledButton";
import StyledH1 from "./styled/StyledH1";
import StyledH2 from "./styled/StyledH2";
import StyledP from "./styled/StyledP";

const Profile = ({ data, cookies, user, setUser }) => {
  const router = useRouter();
  const theme = useTheme();
  const handleLogout = useHandleLogout();

  const onClick = async () => {
    await handleLogout(cookies, setUser);
    router.push("/");
  };

  if (isEmpty(user)) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "auto",
      }}
    >
      <StyledH1>PROFILE</StyledH1>
      <div>
        {user.data.rol == 1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href={"/admin/products"}>
              <a>
                <StyledButton
                  backgroundColor={theme.background}
                  color={theme.primary}
                  borderColor={theme.primary}
                >
                  Admin products
                </StyledButton>
              </a>
            </Link>
          </div>
        ) : null}
        <Link href={"/profile/edit"}>
          <a>
            <StyledButton
              backgroundColor={theme.background}
              color={theme.primary}
              borderColor={theme.primary}
            >
              Edit profile
            </StyledButton>
          </a>
        </Link>
        <StyledButton
          backgroundColor={theme.background}
          color={theme.primary}
          borderColor={theme.primary}
          onClick={onClick}
        >
          Logout
        </StyledButton>
      </div>
      <StyledH2>Your purchases</StyledH2>
      <div>
        {data.products.map((product, index) => (
          <SalesContainer key={data.sales[index].id}>
            <Image
              src={product.image}
              width="300px"
              height="300px"
              alt={product.short_description}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <StyledH2>{product.name}</StyledH2>
              <StyledP>amount: {data.sales[index].amount}</StyledP>
              <StyledP>{data.sales[index].price} $</StyledP>
              <StyledP>{data.sales[index].sale_date}</StyledP>
            </div>
          </SalesContainer>
        ))}
      </div>
    </div>
  );
};

export default Profile;
