import EditProduct from "../../../../components/admin/EditProduct";
import GetProduct from "../../../../utils/GetProduct";

const editProduct = ({ data, cookies }) => {
  return <EditProduct product={data} cookies={cookies} />;
};

export default editProduct;

export const getServerSideProps = async (ctx) => {
  const data = await GetProduct(ctx.params.id);
  return { props: { data: data.products, cookies: ctx.req.cookies } };
};
