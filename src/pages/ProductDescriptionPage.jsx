import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";
import SortContainer from "../component/sort-container";
import Product from "../component/product";
import Footer from "../component/footer";
import { getProductById, getAllProducts } from "../utils/products";
const ProductDescription = () => {
  const { id } = useParams();
  const history = useHistory();
  const product = getProductById(id);
  const products = getAllProducts().filter((p) => p._id.toString() !== id);

  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className="block">
      <Navbar />
      <div className="product-page-header-container">
        <SectionHeader text={product.name} />
      </div>

      <div className="description-container">
        <img src={product.image} className="description-image" />
        <d className="description-content">
          <h3 className="description-title">{product.name}</h3>
          <p className="description-price">GHS {product.price}</p>
          <h4 className="description-tagline">Description</h4>
          <p className="description-text">{product.description} </p>
          <button className="button button--primary">BUY NOW</button>
        </d>
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
          />
        ))}
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default ProductDescription;
