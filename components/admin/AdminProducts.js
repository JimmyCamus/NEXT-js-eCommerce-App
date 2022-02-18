import { useState } from "react";
import { useTheme } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import useHandleDeleteProducts from "../../hooks/useHandleDeleteProducts";
import GetProducts from "../../utils/GetProducts";
import ProductContainer from "../../containers/ProductContainer";
import StyledH1 from "../styled/StyledH1";
import StyledH3 from "../styled/StyledH3";
import StyledP from "../styled/StyledP";
import StyledButton from "../styled/StyledButton";

const AdminProducts = ({ data, cookies }) => {
  const [products, setProducts] = useState(data);
  const theme = useTheme();
  const handleDeleteProducts = useHandleDeleteProducts();

  const onClick = async (id) => {
    const data = await handleDeleteProducts(id, cookies.token);

    if (data.status == 1) {
      const newProducts = await GetProducts();
      console.log(newProducts);
      setProducts(newProducts.products);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <StyledH1>ADMIN PRODUCTS</StyledH1>
      <div>
        <Link href="/admin/products/add">
          <a>
            <StyledButton
              backgroundColor={theme.background}
              color={theme.primary}
              borderColor={theme.primary}
            >
              Add Product
            </StyledButton>
          </a>
        </Link>
      </div>
      <div>
        {products.map((item) => (
          <ProductContainer key={item.id}>
            <Image
              src={item.image}
              alt={item.description}
              width="200px"
              height="200px"
            />
            <StyledH3>{item.name}</StyledH3>
            <StyledP>{item.short_description}</StyledP>
            <Link href={`/admin/products/edit/${item.id}`}>
              <a>
                <StyledButton
                  backgroundColor={theme.background}
                  color={theme.primary}
                  borderColor={theme.primary}
                >
                  Edit
                </StyledButton>
              </a>
            </Link>
            <StyledButton
              backgroundColor={theme.background}
              color={theme.primary}
              borderColor={theme.primary}
              onClick={() => onClick(item.id)}
            >
              Delete
            </StyledButton>
          </ProductContainer>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
