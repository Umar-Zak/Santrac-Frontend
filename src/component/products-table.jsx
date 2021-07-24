import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { getAllProducts } from "../utils/products";
import { paginate } from "../utils/paginate";
import FloatingButton from "./floating-button";
const ProductTable = () => {
  let [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 15;
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
  }, []);

  const handleAddProduct = () => {
    history.push("/add-product");
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
              <tr className="product-row" key={_id}>
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
      <div className="pages">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {pages.map((page) => (
              <li
                onClick={() => handlePageChange(page)}
                key={page}
                class={page === pageNumber ? "page-item active" : "page-item"}
              >
                <a class="page-link" href="#">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <FloatingButton handleClick={handleAddProduct}>
        <FaPlus className="floating-icon" />
      </FloatingButton>
    </div>
  );
};

export default ProductTable;
