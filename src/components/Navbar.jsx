import { Link  } from 'react-router-dom';
import React, { useRef } from "react";
import '../services/NavbarStyle.css';
import logo from '../images/logo_black.png';
import ShoppingCart from '../routes/ShoppingCart';



function Navbar()  {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
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
            <Link className="navbar-link" to="/burgers">Burgers</Link>
            <Link className="navbar-link" to="#">About</Link>
            <Link className="navbar-link" to="#">Contact</Link>
            <Link className="navbar-link" to="/shopping-cart">Shopping Cart</Link>

            </ul>
        </div>
          <div className="icons-container">
            <div className="fas fa-search"  id="search-btn" onClick={searchHandler}/>
            <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler} />
            <div className="fas fa-user" id="user-btn" />
            <div className="fas fa-bars" id="menu-btn"onClick={navbarHandler}/>

          </div>
        </div>
  
       
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
       
        <div className="cart-items-container" ref={cartRef}>
          <a href="#" className="btn"></a>
          <ShoppingCart></ShoppingCart>
          
        </div>

      </header>
  );
};

export default Navbar;