import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import Link from "next/link";
import useHandleProtectedForm from "../hooks/useHandleProtectedForm";
import Image from "next/image";
import ProductPageContainer from "../containers/ProductPageContainer";
import DescriptionContainer from "../containers/DescriptionContainer";
import StyledButton from "./styled/StyledButton";
import StyledInput from "./styled/StyledInput";
import StyledH1 from "./styled/StyledH1";
import StyledH2 from "./styled/StyledH2";
import StyledP from "./styled/StyledP";

const ProductPageContent = ({ data, cookies }) => {
  const [form, setForm] = useState({ product_id: data.id, ammount: 1 });
  const router = useRouter();
  const theme = useTheme();
  const handleProtectedForm = useHandleProtectedForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleProtectedForm("cart", "POST", form, cookies.token);
    if (data.status == 1) {
      router.push("/cart");
      return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ProductPageContainer>
        <div>
          <Image
            src={data.image}
            alt={data.short_description}
            width="300px"
            height="300px"
          />
        </div>
        <div>
          <div>
            <StyledH1 display="inline">{data.brand} </StyledH1>
            <StyledH1 display="inline" color={theme.primary}>
              {data.name}
            </StyledH1>
          </div>
          <StyledP lineHeight="200%">Stock: {data.stock} units</StyledP>
          <StyledP lineHeight="200%">Model: {data.model} </StyledP>
          <StyledP lineHeight="200%">Category: {data.category} </StyledP>
          <StyledH2 color={theme.secondary}>{data.price} $</StyledH2>
          {cookies.token ? (
            <form onSubmit={onSubmit}>
              <StyledInput
                type="number"
                min="1"
                max={data.stock}
                value={form.ammount}
                onChange={(e) => setForm({ ...form, ammount: e.target.value })}
                required
              />
              <StyledInput type="submit" value="Add to cart" />
            </form>
          ) : (
            <Link href="/login">
              <a>
                <StyledButton
                  backgroundColor={theme.primary}
                  color={theme.onPrimary}
                  borderColor={theme.onSurface}
                >
                  Login to add to cart
                </StyledButton>
              </a>
            </Link>
          )}
        </div>
      </ProductPageContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <StyledH2>Description</StyledH2>
        <DescriptionContainer>
          <StyledP lineHeight="150%">{data.description}</StyledP>
        </DescriptionContainer>
      </div>
    </div>
  );
};

export default ProductPageContent;
