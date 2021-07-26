import React from "react";
const Input = ({ handleChange, name, type, placeholder }) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      name={name}
      className="input"
    />
  );
};

export default Input;
