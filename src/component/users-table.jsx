import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAllUsers } from "../utils/user";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
const UsersTable = () => {
  let [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;

  const handlePagination = (number) => {
    setPageNumber(number);
  };
  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        toast("Unexpected error. Check your internet connection");
      });
  }, []);

  let pages = Math.ceil(users.length / pageSize);
  pages = Array.from({ length: pages }, (_, i) => i + 1);

  users = paginate(users, pageNumber, pageSize);
  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ username, _id, email, phone, dateJoined }) => (
            <tr key={_id} className="product-row">
              <td>{username}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dateJoined.toString().substr(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pages={pages}
        pagenumber={pageNumber}
        handlepagechange={handlePagination}
      />
    </div>
  );
};

export default UsersTable;
