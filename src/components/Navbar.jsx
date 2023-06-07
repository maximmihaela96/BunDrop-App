import { Link  } from 'react-router-dom';
import React, { useRef } from "react";
import '../services/NavbarStyle.css';
import logo from '../images/logo_black.png';

function Navbar()  {
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="./"><img src={logo} alt="bun_drop" /></a>
        <div className="logo-title">
          <p className="logo-name">Bun Drop Hamburger</p>
          <span className="logo-slogan" >Drop it like it's hot! </span>
        </div>
      </div>

<div className="navbar-container">
        <div className="navbar-items" ref={navbarRef}>
            <ul>
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/meny">Meny</Link>
            <Link className="navbar-link" to="#">About</Link>
            <Link className="navbar-link" to="#">Contact</Link>
            </ul>
        </div>
          <div className="icons-container">
          <Link to="/shopping-cart">
            <div className="fas fa-shopping-cart" />
          </Link>
            <div className="fas fa-bars" id="menu-btn"onClick={navbarHandler}/>

          </div>
        </div>

      </header>
  );
};

export default Navbar;