// import logo from "../logo.png";
import { Link } from "react-router-dom"; // component
import React from "react";

function Header() {
    return (
        <div className="header">
            {/* <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link> */}


    
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> HOME </Link>
                    </li>
                    <li>
                        <Link to="/programs">Our Programs </Link>
                    </li>
                    <li>
                        <Link to="/about">OUR STORY </Link>
                    </li>
                    <li>
                        <Link to="/our-brands">OUR BRANDS</Link>
                    </li>
                    <li>
                        <Link to="/initiatives">SOCIAL INITIATIVES</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">CONTACT US </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Header;
