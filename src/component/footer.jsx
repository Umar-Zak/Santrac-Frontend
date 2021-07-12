import React from 'react';
import {FaFacebookSquare,FaInstagram,FaWhatsapp,FaDribbble} from "react-icons/fa"

const Footer = () => {
    return (<div className="footer">
        <h6 className="copy-right">copyright santrac groupe { new Date().getFullYear()}</h6>
        <div className="socials">
        <FaFacebookSquare className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaWhatsapp className="social-icon" />
        <FaDribbble className="social-icon" />
        </div>
    </div>);
}
 
export default Footer;