import React from "react";

const Product = ({ name, price, image, handleClick, showPrice = false }) => {
  return (
    <div onClick={handleClick} className="product">
      <div className="product--body">
        <img src={image} alt="" className="product__image" />
        <h5 className="product__name">{name}</h5>
      </div>
      <div className="product--footer">
        <p className="product__price">
          {showPrice && "GHS "}
          {price}.00
        </p>
      </div>
    </div>
  );
};

export default Product;
