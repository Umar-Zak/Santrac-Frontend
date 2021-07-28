import React from "react";
import {
  FaSalesforce,
  FaFirstOrder,
  FaProductHunt,
  FaUserFriends,
  FaTrafficLight,
  FaCartPlus,
} from "react-icons/fa";
import HighLight from "./highlight";

const OverView = () => {
  return (
    <div className="overview">
      <HighLight description="GHS 20.90" tag="Sales in the last 30 days">
        <FaSalesforce
          style={{ color: "#28c8a4" }}
          className="highlight--icon"
        />
      </HighLight>
      <HighLight description="4900" tag="Orders in the Last 30 days">
        <FaFirstOrder
          style={{ color: "#e2d27f" }}
          className="highlight--icon"
        />
      </HighLight>
      <HighLight description="300" tag="Products In Stock">
        <FaProductHunt
          style={{ color: "#9280d4" }}
          className="highlight--icon"
        />
      </HighLight>
      <HighLight description="100" tag="New Users for the Week">
        <FaUserFriends
          style={{ color: "tomato" }}
          className="highlight--icon"
        />
      </HighLight>
      <HighLight description="10000" tag="Site Traffick for the Month">
        <FaTrafficLight
          style={{ color: "seagreen" }}
          className="highlight--icon"
        />
      </HighLight>
      <HighLight description="30" tag="Uncompleted Transactions">
        <FaCartPlus style={{ color: "#28c8a4" }} className="highlight--icon" />
      </HighLight>
    </div>
  );
};

export default OverView;
