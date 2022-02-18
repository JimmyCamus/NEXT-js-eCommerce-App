const GetProduct = async (id) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products/${id}`
  );
  const data = await response.json();
  return {
    products: data.data.product,
  };
};

export default GetProduct;
