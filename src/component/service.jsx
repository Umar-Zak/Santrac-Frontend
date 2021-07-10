import React from 'react';


const Service = ({title,text,children}) => {
    return (<div className="service">
        {children}
        <h4 className="service__title">{title}</h4>
        <p className="service__text">{ text}</p>
    </div> );
}
 
export default Service;