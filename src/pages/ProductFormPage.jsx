import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getAllCategories, addProduct } from "../utils/products";
import { uploadFile } from "../service/firebase";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";
import Input from "../component/input";
import Button from "../component/button";
import Error from "../component/error";
import Footer from "../component/footer";
import Spiner from "../component/spiner";
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
  });

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState({});
  const history = useHistory();
  const [spiner, setSpiner] = useState(false);
  const handleImageInput = ({ target }) => {
    const file = target.files[0];
    const types = [
      "image/png",
      "image/jpg",
      "image/gif",
      "image/jpeg",
      "image/jfif",
    ];
    if (!types.includes(file.type.toLowerCase()))
      return toast("File must be an image");

    setImage(file);
  };

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
    <div>
      <Navbar />
      <div className="block">
        <div className="form-container">
          <SectionHeader text="Product Form" />
          <Formik
            onSubmit={async (values) => {
              setSpiner(true);
              const url = await uploadFile(image);
              try {
                await addProduct({ ...values, image: url });
                history.push("/dashboard");
              } catch ({ response: { data, status } }) {
                setSpiner(false);
                if (status < 400) return toast(data);
                toast("Unexpected error. Please try again");
              }
            }}
            validationSchema={schema}
            initialValues={{
              name: "",
              price: "",
              description: "",
              quantity: "",
              category: "",
            }}
          >
            {({ touched, handleChange, errors, values }) => (
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
                <select
                  onChange={handleChange}
                  className="input"
                  name="category"
                >
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
                <Input
                  name="image"
                  handleChange={handleImageInput}
                  type="file"
                />
                {spiner && <Spiner />}
                {!spiner && (
                  <Button
                    text="Add Product"
                    type="button--primary button--large"
                  />
                )}
              </Form>
            )}
          </Formik>
        </div>
        <div className="divider"></div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductForm;
