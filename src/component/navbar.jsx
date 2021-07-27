import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);

  const handleSearchBoxVisisbility = () => {
    setSearchBoxVisible(!searchBoxVisible);
  };

  const handleNavBarVisibility = () => {
    setNavbarVisible(!navbarVisible);
  };

  const token = localStorage.getItem("token");

  return (
    <React.Fragment>
      <div className="navbar-section">
        <div className="block">
          <nav className="mobile-nav">
            <div className="mobile-nav__header">
              <h2 className="mobile-logo">SanTrac</h2>
              <FaBars onClick={handleNavBarVisibility} className="bars" />
            </div>
            {navbarVisible && (
              <ul className="mobile-nav--links">
                <div className="mobile-nav__header">
                  <h2 className="mobile-logo">SanTrac</h2>
                  <FaTimes
                    onClick={handleNavBarVisibility}
                    className="bars close"
                  />
                </div>
                <li className="mobile-list--item">
                  <Link to="/" className="mobile--link">
                    Home
                  </Link>
                </li>
                <li className="mobile-list--item">
                  <Link to="#about" className="mobile--link">
                    about
                  </Link>
                </li>
                <li className="mobile-list--item">
                  <Link to="/product" className="mobile--link">
                    Product
                  </Link>
                </li>
                <li className="mobile-list--item">
                  <Link to="#" className="mobile--link">
                    Contact
                  </Link>
                </li>
                <li className="mobile-list--item">
                  {!token && (
                    <Link to="/login" className="mobile--link">
                      Login
                    </Link>
                  )}
                  {token && (
                    <Link to="/logout" className="mobile--link">
                      Logout
                    </Link>
                  )}
                </li>
              </ul>
            )}
          </nav>

          <div className="navbar-desktop">
            <ul className="desktop-nav--links">
              <li className="desktop-list--item">
                <Link to="/" className="desktop--link">
                  Home
                </Link>
              </li>
              <li className="desktop-list--item">
                <Link to="#about" className="desktop--link">
                  About
                </Link>
              </li>
              <li className="desktop-list--item">
                <Link to="/products" className="desktop--link">
                  Products
                </Link>
              </li>
              <li className="desktop-list--item">
                <Link to="#" className="desktop--link">
                  Contact
                </Link>
              </li>
              <li className="desktop-list--item">
                {!token && (
                  <Link to="/login" className="desktop--link">
                    Login
                  </Link>
                )}
                {token && (
                  <Link to="/logout" className="desktop--link">
                    Logout
                  </Link>
                )}
              </li>
            </ul>
            <div className="desktop-search--area">
              {searchBoxVisible && (
                <input type="text" placeholder="Search" autoFocus />
              )}
              {!searchBoxVisible && (
                <FaSearch
                  onClick={handleSearchBoxVisisbility}
                  className="search-icon"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
