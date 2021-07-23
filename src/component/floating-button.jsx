import React from "react";

const FloatingButton = ({ children, handleClick }) => {
  return (
    <div onClick={handleClick} className="floating-button">
      {children}
    </div>
  );
};

export default FloatingButton;
