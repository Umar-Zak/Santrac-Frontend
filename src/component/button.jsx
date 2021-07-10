import React from 'react';
const Button = ({ text, handleClick, type }) => {
    return (<button onClick={handleClick} className={`button ${type}`}>{text}</button>);
}

export default Button;