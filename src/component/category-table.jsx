import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getAllCategories, addCategory } from "../utils/products";
import { paginate } from "../utils/paginate";
import FloatingButton from "./floating-button";
import SectionHeader from "./section-header";
import Input from "./input";
import Button from "./button";
import Error from "./error";

const CategoryTable = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Category name is required"),
  });
  let [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const pageSize = 15;
  const handlePageChange = (number) => {
    setPageNumber(number);
  };
  const triggerModal = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch(({ response }) => {
        toast("unexpected error. Please check your internet connection");
      });
  }, [category]);

  let pages = Math.ceil(categories.length / pageSize);
  pages = Array.from({ length: pages }, (_, i) => i + 1);
  categories = paginate(categories, pageNumber, pageSize);
  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Category Name</td>
            <td>Date Created</td>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ name, created_at, _id }) => (
            <tr key={_id} className="product-row">
              <td>{name}</td>
              <td>{created_at.toString().substr(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <SectionHeader text="Category Form" />
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: "" }}
            validationSchema={schema}
            onSubmit={async (values) => {
              addCategory(values)
                .then(({ _id }) => {
                  setCategory(_id);
                  setShowModal(false);
                })
                .catch(({ response: { data, status } }) => {
                  if (status < 500) return toast(data);

                  toast("Unexpected error. Try again");
                });
            }}
          >
            {({ handleChange, touched, errors }) => (
              <div className="modal-form">
                <div className="form-container">
                  <Form>
                    {errors.name && touched.name && (
                      <Error text={errors.name} />
                    )}
                    <Input
                      handleChange={handleChange}
                      type="text"
                      name="name"
                      placeholder="Category name"
                    />
                    <Button
                      type="button--primary button--large"
                      text="Save category"
                    />
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <div className="pages">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                key={page}
                onClick={() => handlePageChange(page)}
                key={page}
                className={
                  page === pageNumber ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" href="#">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <FloatingButton handleClick={triggerModal}>
        <FaPlus className="floating-icon" />
      </FloatingButton>
    </div>
  );
};

export default CategoryTable;
