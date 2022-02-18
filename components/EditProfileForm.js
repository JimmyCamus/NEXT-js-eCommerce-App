import { useState } from "react";
import { useRouter } from "next/router";
import useHandleProtectedForm from "../hooks/useHandleProtectedForm";
import Form from "./Form";
import FormContainer from "../containers/FormContainer";
import StyledH1 from "./styled/StyledH1";

const EditProfileForm = ({ user, setUser, cookies }) => {
  const formInputs = {
    name: user.data.name,
    email: user.data.email,
    country: user.data.country,
    state: user.data.state,
    city: user.data.city,
    address: user.data.address,
    password: "",
    password_confirmation: "",
  };
  const [form, setForm] = useState(formInputs);
  const handleProtectedForm = useHandleProtectedForm();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password != form.password_confirmation) {
      return;
    }
    const data = await handleProtectedForm(
      "edit-user",
      "PATCH",
      form,
      cookies.token
    );
    if (data.status == 1) {
      setUser(data.data.user);
      router.push("/");
      return null;
    }
  };

  return (
    <FormContainer>
      <StyledH1>EDIT PROFILE</StyledH1>
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
            type: "submit",
            value: "Submit",
          },
        ]}
      />
    </FormContainer>
  );
};

export default EditProfileForm;

/**
 *        <input
          name="name"
          placeholder="Name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          name="country"
          placeholder="Country"
          type="text"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          required
        />
        <input
          name="state"
          placeholder="State"
          type="text"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        />
        <input
          name="city"
          placeholder="City"
          type="text"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          required
        />
        <input
          name="address"
          placeholder="Address"
          type="text"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <span hidden={form.password == form.password_confirmation}>A</span>
        <input
          name="password_confirmation"
          placeholder="Password confirmation"
          type="password"
          value={form.password_confirmation}
          onChange={(e) =>
            setForm({ ...form, password_confirmation: e.target.value })
          }
          required
        />
        <input type="submit" value="Submit" />
 */
