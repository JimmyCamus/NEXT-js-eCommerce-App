import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import useHandleLogin from "../hooks/useHandleLogin";
import StyledH1 from "./styled/StyledH1";
import FormContainer from "../containers/FormContainer";
import Form from "./Form";
import ErrorAlert from "../utils/ErrorAlert";

const LoginForm = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const route = useRouter();
  const theme = useTheme();
  const handleLogin = useHandleLogin();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleLogin(form.email, form.password);
    setUser(data.userData);
    if (data.success) {
      route.push("/", undefined, { shallow: true });
      return;
    }
    ErrorAlert("Invalid credentials", theme)
  };

  return (
    <FormContainer>
      <StyledH1>LOGIN</StyledH1>
      <Form
        onSubmit={onSubmit}
        inputs={[
          {
            type: "email",
            placeholder: "Email",
            name: "email",
            value: form.email,
            onChange: (e) => setForm({ ...form, email: e.target.value }),
            required: true,
          },
          {
            type: "password",
            placeholder: "Password",
            name: "password",
            value: form.password,
            onChange: (e) => setForm({ ...form, password: e.target.value }),
            required: true,
          },
          {
            type: "submit",
            value: "Login",
          },
        ]}
      />
    </FormContainer>
  );
};

export default LoginForm;
