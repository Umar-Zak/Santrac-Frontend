import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  getAllCategories,
  addCategory,
  updateCategory,
} from "../utils/products";
import { paginate } from "../utils/paginate";
import FloatingButton from "./floating-button";
import SectionHeader from "./section-header";
import Input from "./input";
import Button from "./button";
import Error from "./error";
import Pagination from "../component/pagination";

const CategoryTable = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Category name is required"),
  });
  let [categories, setCategories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const pageSize = 10;
  const handlePageChange = (number) => {
    setPageNumber(number);
  };
  const triggerModal = () => {
    setCategory("");
    setId("");
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };

  const handleRowClick = (id) => {
    const category = categories.find((c) => c._id === id);
    setCategory(category);
    setId(id);
    setShowModal(true);
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
            <th>Category Name</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ name, created_at, _id }) => (
            <tr
              onClick={() => handleRowClick(_id)}
              key={_id}
              className="product-row"
            >
              <td>{name}</td>
              <td>{created_at.toString().substr(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pages={pages}
        handlepagechange={handlePageChange}
        pagenumber={pageNumber}
      />
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <SectionHeader text="Category Form" />
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: category ? category.name : "" }}
            validationSchema={schema}
            onSubmit={async (values) => {
              if (!id) {
                addCategory(values)
                  .then(({ _id }) => {
                    setCategory(_id);
                    setShowModal(false);
                  })
                  .catch(({ response: { data, status } }) => {
                    if (status < 500) return toast(data);

                    toast("Unexpected error. Try again");
                  });
                return;
              }
              updateCategory(id, values)
                .then((data) => {
                  setId("");
                  setCategory(data);
                  setShowModal(false);
                })
                .catch(({ response: { data, status } }) => {
                  if (status === 402) {
                    toast(data);
                    setId("");
                    setCategory(data);
                    setShowModal(false);
                    return;
                  }

                  if (status < 500) return toast(data);

                  toast("Unexpected error. Try again");
                });
            }}
          >
            {({ handleChange, touched, errors, values }) => (
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
                      value={values.name}
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

      <FloatingButton handleClick={triggerModal}>
        <FaPlus className="floating-icon" />
      </FloatingButton>
    </div>
  );
};

export default CategoryTable;
