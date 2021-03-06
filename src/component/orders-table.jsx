import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAllOrders } from "../utils/products";
import { paginate } from "../utils/paginate";
import OrderDetails from "./order-details-modl";
import Pagination from "./pagination";
const OrdersTable = () => {
  let [orders, setOrders] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderReference, setOrderReference] = useState("");
  const pageSize = 10;

  const handlePagination = (number) => {
    setPageNumber(number);
  };
  const handleRowClick = (id) => {
    const order = orders.find((o) => o._id === id);
    setOrderReference(order.reference);
    setCart(order.cart);
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    getAllOrders()
      .then((data) => {
        setOrders(data);
      })
      .catch(({ response: { data, status } }) => {
        if (status < 500) return toast(data);

        toast("Unexpected error. Please check your internet connection");
      });
  }, []);

  let pages = Math.ceil(orders.length / pageSize);
  pages = Array.from({ length: pages }, (_, i) => i + 1);

  orders = paginate(orders, pageNumber, pageSize);

  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Order Reference</th>
            <th>Order Date</th>
            <th>Amount (GHS)</th>
            <th>Ordered By</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(
            ({ reference, amount, _id, dateOrdered, user: { email } }) => (
              <tr
                className="product-row"
                onClick={() => handleRowClick(_id)}
                key={_id}
              >
                <td>{reference}</td>
                <td>{dateOrdered.toString().substr(0, 10)}</td>
                <td>{amount}</td>
                <td>{email}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination
        pages={pages}
        handlepagechange={handlePagination}
        pagenumber={pageNumber}
      />
      {showDetails && (
        <OrderDetails
          handleHide={handleHideDetails}
          cart={cart}
          reference={orderReference}
        />
      )}
    </div>
  );
};

export default OrdersTable;
