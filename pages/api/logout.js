import cookie from "cookie";

const logout = async (req, res) => {
  if (req.headers.token == "undefined") {
    res.json({ success: false });
    return;
  }
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/logout`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.headers.token}`,
      },
    }
  );

  const data = await response.json();

  if (data.status != 1) {
    res.json({ success: false });
  }

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0),
    })
  );

  res.statusCode = 200;
  res.json({ success: true });
};

export default logout;
