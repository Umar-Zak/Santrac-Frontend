import React from "react";
const Input = ({ handleChange, name, value, type, placeholder }) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      name={name}
      className="input"
      value={value}
    />
  );
};

export default Input;
