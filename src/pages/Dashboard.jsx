import React, { useState } from "react";
import CategoryTable from "../component/category-table";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import OrdersTable from "../component/orders-table";
import ProductTable from "../component/products-table";
import UsersTable from "../component/users-table";

const Dashboard = () => {
  const [link, setLink] = useState("categories");

  const handleLinkClick = (event, name) => {
    event.preventDefault();
    setLink(name);
  };
  return (
    <div className="block">
      <Navbar />
      <div className="dashboard">
        <div className="navigation">
          <ul className="dashboard-links">
            <li className="mobile-list--item">
              <a
                href="#"
                onClick={(event) => handleLinkClick(event, "categories")}
                className={
                  link === "categories"
                    ? "mobile--link active-link"
                    : "mobile--link"
                }
              >
                Categories
              </a>
            </li>
            <li className="mobile-list--item">
              <a
                href="#"
                onClick={(event) => handleLinkClick(event, "products")}
                className={
                  link === "products"
                    ? "mobile--link active-link"
                    : "mobile--link"
                }
              >
                Products
              </a>
            </li>
            <li className="mobile-list--item">
              <a
                href="#"
                onClick={(event) => handleLinkClick(event, "orders")}
                className={
                  link === "orders"
                    ? "mobile--link active-link"
                    : "mobile--link"
                }
              >
                Orders
              </a>
            </li>
            <li className="mobile-list--item">
              <a
                href="#"
                onClick={(event) => handleLinkClick(event, "users")}
                className={
                  link === "users" ? "mobile--link active-link" : "mobile--link"
                }
              >
                Users
              </a>
            </li>
          </ul>
        </div>
        <div className="content-section">
          {link === "categories" && <CategoryTable />}
          {link === "products" && <ProductTable />}
          {link === "orders" && <OrdersTable />}
          {link === "users" && <UsersTable />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
