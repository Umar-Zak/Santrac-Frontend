import React from "react";
import { FaSalesforce } from "react-icons/fa";
const HighLight = ({ children, description, tag }) => {
  return (
    <div className="highlight">
      <div className="highlight--icon-container">{children}</div>
      <h5 className="highlight--tag">{tag}</h5>
      <p className="highlight--description">{description}</p>
    </div>
  );
};

export default HighLight;
