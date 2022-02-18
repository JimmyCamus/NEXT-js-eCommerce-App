import { useState } from "react";
import { useRouter } from "next/router";
import useHandleRegister from "../hooks/useHandleRegister";
import Form from "./Form";
import FormContainer from "../containers/FormContainer";
import StyledH1 from "./styled/StyledH1";

const formInputs = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  country: "",
  state: "",
  city: "",
  address: "",
};

const RegisterForm = () => {
  const [form, setForm] = useState(formInputs);
  const router = useRouter();
  const handleRegister = useHandleRegister();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleRegister(form);
    if (data.status == 1) {
      router.push("/login");
      return null;
    }
  };

  return (
    <FormContainer>
      <StyledH1>REGISTER</StyledH1>
      <Form
        onSubmit={onSubmit}
        inputs={[
          {
            name: "name",
            type: "text",
            placeholder: "Name",
            value: form.name,
            onChange: (e) => setForm({ ...form, name: e.target.value }),
            required: true,
          },
          {
            name: "email",
            type: "email",
            placeholder: "Email",
            value: form.email,
            onChange: (e) => setForm({ ...form, email: e.target.value }),
            required: true,
          },
          {
            name: "password",
            type: "password",
            placeholder: "Password",
            value: form.password,
            onChange: (e) => setForm({ ...form, password: e.target.value }),
            required: true,
          },
          {
            name: "password_confirmation",
            type: "password",
            placeholder: "Password Confirmation",
            value: form.password_confirmation,
            onChange: (e) =>
              setForm({ ...form, password_confirmation: e.target.value }),
            required: true,
          },
          {
            name: "country",
            type: "text",
            placeholder: "Country",
            value: form.country,
            onChange: (e) => setForm({ ...form, country: e.target.value }),
            required: true,
          },
          {
            name: "state",
            type: "text",
            placeholder: "State",
            value: form.state,
            onChange: (e) => setForm({ ...form, state: e.target.value }),
            required: true,
          },
          {
            name: "city",
            type: "text",
            placeholder: "City",
            value: form.city,
            onChange: (e) => setForm({ ...form, city: e.target.value }),
            required: true,
          },
          {
            name: "address",
            type: "text",
            placeholder: "Address",
            value: form.address,
            onChange: (e) => setForm({ ...form, address: e.target.value }),
            required: true,
          },
          {
            type: "submit",
            value: "Register",
          },
        ]}
      />
    </FormContainer>
  );
};

export default RegisterForm;
