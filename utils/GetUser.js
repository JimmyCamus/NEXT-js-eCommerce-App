const GetUser = async (token) => {
  if (!token) {
    return {};
  }

  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/user-profile`,
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

  return { data: data.data };
};

export default GetUser;
