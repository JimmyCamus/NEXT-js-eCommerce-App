const GetCart = async (token) => {
  if (!token) {
    return {
      status: 0,
    };
  }

  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/cart`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return data.data;
};

export default GetCart;
