import GetCart from "../../utils/GetCart";
import Cart from "../../components/Cart";

const cart = ({ data, cookies }) => {
  return <Cart data={data} cookies={cookies} />;
};

export default cart;

export const getServerSideProps = async (ctx) => {
  const data = await GetCart(ctx.req.cookies.token);
  return {
    props: { data: data.products, cookies: ctx.req.cookies },
  };
};
