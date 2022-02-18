import AddProduct from "../../../../components/admin/AddProduct";

const addProduct = ({ cookies }) => {
  return <AddProduct cookies={cookies} />;
};

export default addProduct;

export const getServerSideProps = async (ctx) => {
  return { props: { cookies: ctx.req.cookies } };
};
