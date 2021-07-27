import React from "react";
const SectionHeader = ({ text, type }) => {
  return <h2 className={`section--header ${type}`}>{text}</h2>;
};

export default SectionHeader;
