import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getAllCategories } from "../utils/products";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";
import Input from "../component/input";
import Button from "../component/button";
import Error from "../component/error";
import Footer from "../component/footer";
const ProductForm = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Product name is required")
      .max(20, "Name must be less than 20 characters"),
    price: Yup.number()
      .min(1, "Price must be greater than 0")
      .required("Price is required"),
    quantity: Yup.number()
      .min(1, "Quantity must be greater than 0")
      .required("Quantity is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string(),
    image: Yup.string().required("Product image is required"),
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch(({ response: { data, status } }) => {
        if (status < 500) return toast(data);

        toast("nexpected error. Please refresh the page");
      });
  }, []);

  return (
    <div className="block">
      <Navbar />
      <div className="form-container">
        <SectionHeader text="Product Form" />
        <Formik
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={schema}
          initialValues={{
            name: "",
            price: "",
            description: "",
            quantity: "",
            category: "",
            image: "",
          }}
        >
          {({ touched, handleChange, errors }) => (
            <Form>
              {touched.name && errors.name && <Error text={errors.name} />}
              <Input
                name="name"
                placeholder="Product name"
                handleChange={handleChange}
                type="text"
              />
              {touched.price && errors.price && <Error text={errors.price} />}
              <Input
                name="price"
                placeholder="Product price"
                handleChange={handleChange}
                type="number"
              />
              {touched.quantity && errors.quantity && (
                <Error text={errors.quantity} />
              )}
              <Input
                name="quantity"
                placeholder="Quantity"
                handleChange={handleChange}
                type="number"
              />
              {touched.category && errors.category && (
                <Error text={errors.category} />
              )}
              <select onChange={handleChange} className="input" name="category">
                <option value="">Choose category</option>
                {categories.map(({ name, _id }) => (
                  <option value={_id} key={_id}>
                    {name}
                  </option>
                ))}
              </select>
              {touched.description && errors.description && (
                <Error text={errors.description} />
              )}
              <textarea
                onChange={handleChange}
                className="input"
                name="description"
                id=""
                cols="30"
                rows="5"
                placeholder="Description"
              ></textarea>
              {touched.image && errors.image && <Error text={errors.image} />}
              <Input
                name="image"
                handleChange={(event) => event.target.files[0]}
                type="file"
              />
              <Button text="Add Product" type="button--primary button--large" />
            </Form>
          )}
        </Formik>
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default ProductForm;
