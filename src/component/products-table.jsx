import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  getAllProducts,
  getAllCategories,
  updateProduct,
} from "../utils/products";
import { paginate } from "../utils/paginate";
import FloatingButton from "./floating-button";
import Pagination from "./pagination";
import SectionHeader from "./section-header";
import Input from "./input";
import Button from "./button";
import Error from "./error";
const ProductTable = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .min(1, "Price must be greater than 0")
      .required("Price is required"),
    quantity: Yup.number()
      .min(0, "Price must be greater than 0")
      .required("Quantity is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string(),
  });

  let [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState({});

  const handleRowClick = (id) => {
    const clone = products.find((p) => p._id === id);
    setProduct(clone);
    setShowModal(true);
  };

  const pageSize = 10;
  const history = useHistory();
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(({ response: { status, data } }) => {
        if (status < 500) return toast(data);

        toast("Unexpected error. Try again");
      });
    getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        toast("Error connecting to the server");
      });
  }, [update]);

  const handleAddProduct = () => {
    history.push("/add-product");
  };

  const hideModal = () => {
    setShowModal(false);
  };
  let pages = Math.ceil(products.length / pageSize);
  pages = Array.from({ length: pages }, (_, i) => i + 1);

  products = paginate(products, pageNumber, pageSize);

  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Product Name</th>
            <th>Price (GHS)</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {products.map(
            ({ name, price, _id, quantity, category, lastModified }) => (
              <tr
                onClick={() => handleRowClick(_id)}
                className="product-row"
                key={_id}
              >
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{category.name}</td>
                <td>{lastModified.toString().substr(0, 10)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <SectionHeader text="Edit product form" />
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: product.name,
              price: product.price,
              category: product.category ? product.category._id : "",
              description: product.description,
              quantity: product.quantity,
            }}
            onSubmit={async (values) => {
              try {
                await updateProduct(product._id, {
                  ...values,
                  image: product.image,
                });
                setUpdate(Date.now());
                setShowModal(false);
              } catch ({ response: { status, data } }) {
                if (status < 500) return toast(data);

                toast("Unexpected error. Try again");
              }
            }}
            validationSchema={schema}
          >
            {({ handleChange, values, errors, touched }) => (
              <div className="modal-form">
                <div className="form-container">
                  <Form>
                    {touched.name && errors.name && (
                      <Error text={errors.name} />
                    )}
                    <Input
                      handleChange={handleChange}
                      type="text"
                      name="name"
                      placeholder="Product name"
                      value={values.name}
                    />
                    {touched.price && errors.price && (
                      <Error text={errors.price} />
                    )}
                    <Input
                      handleChange={handleChange}
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={values.price}
                    />
                    {touched.quantity && errors.quantity && (
                      <Error text={errors.quantity} />
                    )}
                    <Input
                      handleChange={handleChange}
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      value={values.quantity}
                    />
                    {touched.category && errors.category && (
                      <Error text={errors.category} />
                    )}
                    <select
                      className="input"
                      name="category"
                      onChange={handleChange}
                      value={values.category}
                    >
                      <option value="">Choose category</option>
                      {categories.map(({ name, _id }) => (
                        <option value={_id}>{name}</option>
                      ))}
                    </select>
                    {touched.description && errors.description && (
                      <Error text={errors.description} />
                    )}
                    <textarea
                      className="input"
                      placeholder="Product description"
                      name="description"
                      value={values.description}
                      cols="30"
                      rows="5"
                    ></textarea>
                    <Button
                      text="Update Product"
                      type="button--primary button--large"
                    />
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Pagination
        pages={pages}
        handlepagechange={handlePageChange}
        pagenumber={pageNumber}
      />
      <FloatingButton handleClick={handleAddProduct}>
        <FaPlus className="floating-icon" />
      </FloatingButton>
    </div>
  );
};

export default ProductTable;
