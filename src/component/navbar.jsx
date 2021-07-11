import React, { useState } from 'react';
import {FaBars,FaTimes,FaSearch} from "react-icons/fa"
const Navbar = () => {
    const [navbarVisible,setNavbarVisible]=useState(false)
    const [searchBoxVisible,setSearchBoxVisible]=useState(false)

    const handleSearchBoxVisisbility = () => {
        setSearchBoxVisible(!searchBoxVisible)
    }
    
    const handleNavBarVisibility = () => {
        setNavbarVisible(!navbarVisible)
    }

    return (<React.Fragment>
        
        <nav className="mobile-nav">
            <div className="mobile-nav__header">
                <h2 className="mobile-logo">SanTrac</h2>
                <FaBars onClick={handleNavBarVisibility} className="bars" />
            </div>
           {navbarVisible &&  <ul className="mobile-nav--links">
                <div className="mobile-nav__header">
                <h2 className="mobile-logo">SanTrac</h2>
                <FaTimes onClick={handleNavBarVisibility} className="bars" />
            </div>
                <li className="mobile-list--item"><a href="#" className="mobile--link">Home</a></li>
                 <li className="mobile-list--item"><a href="#" className="mobile--link">about</a></li>
                <li className="mobile-list--item"><a href="#" className="mobile--link">Product</a></li>
                <li className="mobile-list--item"><a href="#" className="mobile--link">Contact</a></li>
               
       </ul>}
        </nav>
   
        <div className="navbar-desktop">
            <ul className="desktop-nav--links">
                <li className="desktop-list--item"><a href="#" className="desktop--link">Home</a></li>
                <li className="desktop-list--item"><a href="#" className="desktop--link">About</a></li>
                <li className="desktop-list--item"><a href="#" className="desktop--link">Products</a></li>
                <li className="desktop-list--item"><a href="#" className="desktop--link">Contact</a></li>
        </ul>
            <div className="desktop-search--area">
                {searchBoxVisible&& <input type="text" placeholder="Search" autoFocus />}
                {!searchBoxVisible&& <FaSearch onClick={handleSearchBoxVisisbility} className="search-icon" />}
        </div>
        </div>
    </React.Fragment>);
}
 
export default Navbar;