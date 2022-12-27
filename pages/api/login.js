import cookie from "cookie";
import FormData from "form-data";
import GetUser from "../../utils/GetUser";

const login = async (req, res) => {
  const form = new FormData();
  form.append("email", req.body.email);
  form.append("password", req.body.password);

  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/api/login`,
    {
      method: "POST",
      body: form,
    }
  );

  const data = await response.json();

  if (!data.data) {
    res.json({ success: false });
  }

  if (data.status == 0) {
    res.status(402);
    res.json({ success: false, userData: {} });
    return;
  }

  const userData = await GetUser(data.data.user_token);

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", data.data.user_token, {
      httpOnly: true,
      path: "/",
    })
  );

  res.statusCode = 200;
  res.json({ success: true, userData });
};

export default login;
