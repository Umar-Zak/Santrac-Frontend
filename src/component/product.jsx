import React from 'react';

const Product = ({name,price,image,handleClick,showPrice=false}) => {
    return (<div onClick={handleClick} className="product">
        <img src={image} alt="" className="product__image" />
        <h5 className="product__name">{name}</h5>
        <p className="product__price">{showPrice&& "GHS"}{ price}</p>
    </div> );
}
 
export default Product;