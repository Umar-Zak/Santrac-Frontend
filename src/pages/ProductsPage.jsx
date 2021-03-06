import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";
import Product from "../component/product";
import Footer from "../component/footer";
import SortContainer from "../component/sort-container";
import { getAllProducts } from "../utils/products";
import Cart from "../component/cart";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => toast("Error connecting to the server"));
  }, []);

  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="block">
        <div className="product-page-header-container">
          <SectionHeader text="Products" />
        </div>
        <SortContainer show={true} />
        <div className="product-container">
          {products.map((p) => (
            <Product
              key={p._id}
              handleClick={() => {
                handleClick(p._id);
              }}
              name={p.name}
              price={p.price}
              showPrice={true}
              image={p.image}
            />
          ))}
        </div>

        <div className="divider"></div>
        <Cart />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;
