import React from "react";
const Button = ({ text, handleClick, type }) => {
  return (
    <button type="submit" onClick={handleClick} className={`button ${type}`}>
      {text}
    </button>
  );
};

export default Button;
