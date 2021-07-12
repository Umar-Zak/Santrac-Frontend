import React from 'react';

const Mission = ({title,text}) => {
    return (<div className="mission">
        <h5 className="mission__title">{title}</h5>
        <p className="mission__text">{ text}</p>
    </div> );
}
 
export default Mission;