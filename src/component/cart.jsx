import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const history = useHistory();
  const handleClick = () => {
    history.push("/checkout");
  };
  return (
    <div onClick={handleClick} className="cart-container">
      <FaShoppingCart className="cart" />
      <p>{cart ? cart.length : 0}</p>
    </div>
  );
};

export default Cart;
