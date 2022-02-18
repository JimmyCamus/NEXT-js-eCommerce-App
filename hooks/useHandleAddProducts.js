const useHandleAddProducts = () => handleAddProducts;

const handleAddProducts = async (formData, token) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    }
  );
  const data = await response.json();

  console.log(data);

  return {
    status: data.status,
  };
};

export default useHandleAddProducts;
