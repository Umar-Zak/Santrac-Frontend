import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";
import SortContainer from "../component/sort-container";
import Product from "../component/product";
import Footer from "../component/footer";
import { getProductById, getAllProducts, addTocart } from "../utils/products";
import Cart from "../component/cart";
const ProductDescription = () => {
  const { id } = useParams();
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [ID, setID] = useState(id);
  const [product, setProduct] = useState({});
  const [current, setCurrent] = useState("");

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.filter((p) => p._id !== id));
      })
      .catch((err) => toast("Error connecting to the server"));

    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => toast("Error connecting to the server"));
  }, [ID]);

  const handleClick = (id) => {
    setID(id);
    history.push(`/product/${id}`);
  };

  let user = null;
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    user = jwt_decode(token);
  }

 
  return (
    <div className="block">
      <Navbar />
      <div className="product-page-header-container">
        <SectionHeader text={product.name} />
      </div>

      <div className="description-container">
        <img src={product.image} className="description-image" />
        <div className="description-content">
          <h3 className="description-title">{product.name}</h3>
          <p className="description-price">GHS {product.price}</p>
          <h4 className="description-tagline">Description</h4>
          <p className="description-text">{product.description} </p>
          <button
            onClick={() => {
              addTocart(product);
              setCurrent(product);
            }}
            className="button button--primary"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <SortContainer />

      <div className="product-container">
        {products.map((p) => (
          <Product
            image={p.image}
            name={p.name}
            price={p.price}
            showPrice={true}
            handleClick={() => handleClick(p._id)}
            key={p._id}
          />
        ))}
      </div>
      <div className="divider"></div>
      <Footer />
      <Cart />
    </div>
  );
};

export default ProductDescription;
