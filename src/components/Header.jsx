import React from 'react'
import '../services/HeaderStyle.css';
import burgerImage from '../images/burger.png'; 

function Header() {
  return (
    <section className="home" >
        <div className="home-text">
          <h4>
            Best <span>In Hamburger</span>all the times
          </h4>
          <h1>
            BBQ Chicken Salad Burger with Cremy Avocado.
          </h1>

          <p>
            Lorem ipsum, dolor <span>In Hamburger</span> sit amet adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>

          <div className='main-btn'>
            <a href='#' className='btn1'>Order Now</a>
          </div>
        </div>

          <div className="home-img">
            <img src={burgerImage} alt="" />
          </div>
      </section>
  )
}

export default Header
