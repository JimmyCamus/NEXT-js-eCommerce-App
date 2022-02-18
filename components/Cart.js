import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import Image from "next/image";
import useHandleProtectedForm from "../hooks/useHandleProtectedForm";
import GetCart from "../utils/GetCart";
import ProductContainer from "../containers/ProductContainer";
import StyledH2 from "./styled/StyledH2";
import StyledH3 from "./styled/StyledH3";
import StyledP from "./styled/StyledP";
import StyledButton from "./styled/StyledButton";

const Cart = ({ data, cookies }) => {
  const [products, setProducts] = useState(data);
  const router = useRouter();
  const theme = useTheme();
  const handleProtectedForm = useHandleProtectedForm();

  const handleDeleteItem = async (id) => {
    const data = await handleProtectedForm(
      `cart/${id}`,
      "DELETE",
      {},
      cookies.token
    );

    if (data.status != 1) {
      return;
    }

    const newData = await GetCart(cookies.token);
    setProducts(newData.products);
  };

  const handlePurchase = async () => {
    const items = [];

    products.forEach((item) => {
      items.push([item.product.id, item.ammount]);
    });

    const formData = { products: items };

    const data = await handleProtectedForm(
      "sales",
      "POST",
      formData,
      cookies.token
    );

    if (data.status == 1) {
      router.push("/profile");
      return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <StyledH2>Shopping Cart</StyledH2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <ProductContainer key={item.product.id}>
            <Image
              src={item.product.image}
              alt={item.product.description}
              width="200px"
              height="200px"
            />
            <StyledH3>{item.product.name}</StyledH3>
            <StyledP>amount: {item.ammount}</StyledP>
            <StyledP fontWeight="700">
              {item.product.price * item.ammount} $
            </StyledP>
            <StyledButton
              backgroundColor={theme.background}
              color={theme.primary}
              borderColor={theme.primary}
              onClick={() => handleDeleteItem(item.product.id)}
            >
              Delete
            </StyledButton>
          </ProductContainer>
        ))}
      </div>
      <div>
        {products.length > 0 ? (
          <StyledButton
            backgroundColor={theme.background}
            color={theme.secondary}
            borderColor={theme.secondary}
            onClick={() => handlePurchase()}
          >
            PURCHASE
          </StyledButton>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
