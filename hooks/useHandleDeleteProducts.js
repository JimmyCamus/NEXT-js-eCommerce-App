const useHandleDeleteProducts = () => handleDeleteProducts;

const handleDeleteProducts = async (id, token) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  return {
    status: data.status,
  };
};

export default useHandleDeleteProducts;
