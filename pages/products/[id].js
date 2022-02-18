import ProductPageContent from "../../components/ProductPageContent";

const product = ({ data, cookies }) => {
  return <ProductPageContent data={data} cookies={cookies} />;
};

export default product;

export const getServerSideProps = async (ctx) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products/${ctx.params.id}`
  );
  const data = await response.json();
  return {
    props: { data: data.data.product, cookies: ctx.req.cookies },
  };
};
