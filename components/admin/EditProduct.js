import { useState } from "react";
import { useRouter } from "next/router";
import useHandleEditProducts from "../../hooks/useHandleEditProducts";
import Form from "../Form";

const EditProduct = ({ product, cookies }) => {
  const [form, setForm] = useState(product);
  const router = useRouter();
  const handleEditProduct = useHandleEditProducts();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await handleEditProduct(product.id, form, cookies.token);

    if (data.status == 1) {
      router.push("/admin/products");
      return;
    }
  };

  return (
    <div>
    <Form
      onSubmit={onSubmit}
      inputs={[
        {
          name: "name",
          placeholder: "Name",
          type: "text",
          value: form.name,
          onChange: (e) => setForm({ ...form, name: e.target.value }),
          required: true,
        },
        {
          name: "brand",
          placeholder: "Brand",
          type: "text",
          value: form.brand,
          onChange: (e) => setForm({ ...form, brand: e.target.value }),
          required: true,
        },
        {
          name: "model",
          placeholder: "Model",
          type: "text",
          value: form.model,
          onChange: (e) => setForm({ ...form, model: e.target.value }),
          required: true,
        },
        {
          name: "category",
          placeholder: "Category",
          type: "text",
          value: form.category,
          onChange: (e) => setForm({ ...form, category: e.target.value }),
          required: true,
        },
        {
          name: "price",
          placeholder: "price",
          type: "number",
          value: form.price,
          onChange: (e) => setForm({ ...form, price: e.target.value }),
          required: true,
          min: 1,
        },
        {
          name: "stock",
          placeholder: "stock",
          type: "number",
          value: form.stock,
          onChange: (e) => setForm({ ...form, stock: e.target.value }),
          required: true,
          min: 1,
        },
        {
          name: "image",
          placeholder: "Image URL",
          type: "text",
          value: form.image,
          onChange: (e) => setForm({ ...form, image: e.target.value }),
          required: true,
        },
        {
          name: "description",
          placeholder: "description",
          type: "textarea",
          value: form.description,
          onChange: (e) => setForm({ ...form, description: e.target.value }),
          required: true,
        },
        {
          name: "short_description",
          placeholder: "Short description",
          type: "textarea",
          value: form.short_description,
          onChange: (e) => setForm({ ...form, short_description: e.target.value }),
          required: true,
        },
        {
          type: "submit",
          value: "EDIT",
        },
      ]}
    />
  </div>
  );
};

export default EditProduct;
