import Link from "next/link";
import Image from "next/image";
import ProductContainer from "../containers/ProductContainer";
import LandingPageContainer from "../containers/LandingPageContainer";
import StyledH2 from "./styled/StyledH2";
import StyledH3 from "./styled/StyledH3";
import StyledP from "./styled/StyledP";

const LandingPageContent = ({ products }) => {
  return (
    <LandingPageContainer>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <a>
            <ProductContainer hover>
              <StyledH2>{product.name}</StyledH2>
              <StyledH3>{product.brand}</StyledH3>
              <StyledP>{product.short_description}</StyledP>
              <div style={{ margin: "20px 0" }}>
                <Image
                  src={product.image}
                  alt={product.short_description}
                  height="200px"
                  width="200px"
                />
              </div>
              <StyledP fontWeight="700" >{product.price} $</StyledP>
            </ProductContainer>
          </a>
        </Link>
      ))}
    </LandingPageContainer>
  );
};

export default LandingPageContent;
