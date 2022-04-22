import React, { useState } from 'react';
import '../App.css';
import logo from "../Images/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <div>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>

                {/* 2nd menu part  */}
                <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
                    <ul>
                        <li>
                            <a href='' to="/">Overview</a>
                        </li>
                        <li>
                            <a href='' to="/amenities">Amenities</a>
                        </li>
                        <li>
                            <a href='' to="/gallary">Gallary</a>
                        </li>
                        <li>
                            <a href='' to="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href='' to="/about">About</a>
                        </li>
                        <li>
                            <a href='' to="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* hamburget menu start  */}
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;