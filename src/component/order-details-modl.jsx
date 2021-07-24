import React from "react";
import { Modal } from "react-bootstrap";
import SectionHeader from "./section-header";

const OrderDetails = ({ reference, cart, handleHide }) => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Modal onHide={handleHide} show={true}>
        <Modal.Header>
          <SectionHeader text={`Order Reference ${reference}`} />
        </Modal.Header>
        <Modal.Body>
          <table className="table thead thead">
            <thead className="thead">
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity Bought</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ name, price, quantity }) => (
                <tr>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderDetails;
