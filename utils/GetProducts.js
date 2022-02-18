const GetProducts = async () => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products`
  );
  const data = await response.json();
  return {
    products: data.data.products,
  };
};

export default GetProducts;
