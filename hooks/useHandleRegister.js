const useHandleRegister = () => handleRegister;

const handleRegister = async (formData) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  const data = await response.json();

  return {
    status: data.status,
  };
};

export default useHandleRegister;
