import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import '../services/BurgerPage.css';
import '../services/HomeCards.css';

function Home() {


  return (
    
<div>
    <Header></Header>


    <div>
      <div className="card">
      <img src="../images/burger.png" alt="" />
        <h2>Burger</h2>
      </div>

      <div className="card">
      <img src="../images/cola2.jpg" alt="" />
        <h2>Fries</h2>
      </div>

      <div className="card">
      <img src="../images/fries-3.jpg" alt="" />
        <h2>Drink</h2>
      </div>
    </div>

</div>
  )
}

export default Home
