import AdminProducts from "../../../components/admin/AdminProducts";
import GetProducts from "../../../utils/GetProducts";

const products = ({ data, cookies }) => {
  return <AdminProducts data={data} cookies={cookies} />;
};

export default products;

export const getServerSideProps = async (ctx) => {
  const data = await GetProducts();
  return {
    props: { data: data.products, cookies: ctx.req.cookies },
  };
};
