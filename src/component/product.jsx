import React from 'react';

const Product = ({name,price,image,handleClick}) => {
    return (<div onClick={handleClick} className="product">
        <div className="product__image"></div>
        <h5 className="product__name">{name}</h5>
        <p className="product__price">ghs { price}</p>
    </div> );
}
 
export default Product;