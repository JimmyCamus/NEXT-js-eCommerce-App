const useHandleProtectedForm = () => handleProtectedForm;

const handleProtectedForm = async (url, method, formData, token) => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/${url}`,
    {
      method: method,
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
    data: data.data,
  };
};

export default useHandleProtectedForm;
