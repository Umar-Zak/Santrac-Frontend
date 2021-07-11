import React, { useState } from 'react';
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
import Button from './button';
const Slide = ({ image }) => {
    const slides = [1, 2, 3]
    const [flag, setFlag] = useState(0)
    
    const handleForwardClick = () => {
        if (flag < slides.length-1) return setFlag(flag + 1)
        
        setFlag(0)
    }

  const  handleBackClick = () => {
        if (flag === 0) return setFlag(slides.length - 1)
        
        setFlag(flag-1)
    }

    return (
        <div>
            {
                slides.map((slide, index) => {
                if (index===flag) return (
                        <div className="slide">
        <FaAngleLeft onClick={handleBackClick} className="back-arrow" />
        <FaAngleRight onClick={handleForwardClick} className="front-arrow" />
        <div className="hero--text-container">
                                <div className="hero--text">SanTrac groupe</div>
            <div className="hero--button-container">
                <Button text="view more" type="button--primary" />
            </div>
        </div>
    </div>
                    )
                    
                })}
        </div>
    );
}
 
export default Slide;