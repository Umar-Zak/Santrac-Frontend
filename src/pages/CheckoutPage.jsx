import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { order } from "../utils/products";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import Navbar from "../component/navbar";
import SectionHeader from "../component/section-header";

const CheckoutPage = () => {
  const store = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(store);

  const handleIncrement = (id) => {
    const clone = [...cart];
    const index = clone.findIndex((p) => p._id === id);
    const product = clone[index];
    product.quantity = product.quantity + 1;
    product.amount = product.quantity * product.price;
    clone[index] = product;
    setCart(clone);
    localStorage.setItem("cart", JSON.stringify(clone));
  };
  const handleDecrement = (id) => {
    let clone = [...cart];
    const index = clone.findIndex((p) => p._id === id);
    const product = clone[index];
    if (product.quantity === 1) {
      clone = clone.filter((p) => p._id !== id);
      setCart(clone);
      localStorage.setItem("cart", JSON.stringify(clone));
      return;
    }

    product.quantity = product.quantity - 1;
    product.amount = product.quantity * product.price;
    clone[index] = product;
    setCart(clone);
    localStorage.setItem("cart", JSON.stringify(clone));
  };

  const handleDelete = (id) => {
    let clone = [...cart];
    clone = clone.filter((p) => p._id !== id);
    setCart(clone);
    localStorage.setItem("cart", JSON.stringify(clone));
  };

  const calculateAmount = (cart) => {
    let total = 0;
    cart.map((c) => {
      total += c.amount;
    });
    return total;
  };

  const token = localStorage.getItem("token");
  const user = jwt_decode(token);

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount: calculateAmount(cart) * 100,
    publicKey: "pk_test_f6096b2cf6577c0741535bde96177c80513ffc3a",
    currency: "GHS",
  };

  const onSuccess = ({ reference }) => {
    const amount = calculateAmount(cart);
    order({ cart, user: user._id, reference, amount })
      .then((res) => {
        window.location = "/";
      })
      .catch(({ response: { status, data } }) => {
        console.log(status, data);
        if (status < 500) return toast(data);

        toast("Unexpected error. Please contact our office lines");
      });
  };

  const onClose = () => {
    toast("Order cancelled");
  };

  const pay = usePaystackPayment(config);

  return (
    <div className="block">
      <Navbar />
      <div className="checkout-container">
        <SectionHeader text="Review Cart" />
        <table className="table product-table">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Price (GHS)</th>
              <th>Quantity</th>
              <th>Amount (GHS)</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.amount}</td>
                <td>
                  <button
                    onClick={() => handleDecrement(p._id)}
                    className="btn btn-secondary"
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleIncrement(p._id)}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cart.length > 0 && (
          <div className="checkout-region">
            <h4 className="amount">GHS {calculateAmount(cart)}.00</h4>
            <button
              onClick={() => pay(onSuccess, onClose)}
              className="button button--primary"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
