const useHandleEditProducts = () => handleEditProducts;

const handleEditProducts = async (id, formData, token) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    }
  );
  const data = await response.json();

  return {
    status: data.status,
  };
};

export default useHandleEditProducts;
