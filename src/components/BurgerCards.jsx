import '../services/Cards.css';
import { Link } from "react-router-dom";
import React, {useState } from "react";

function BurgerCards({ name, price, image, id }) {

  function addToCart() {
    const existingItems = JSON.parse(localStorage.getItem('selectedBurger')) || [];
    let existingBurger = existingItems.find((item) => item.burger.id === id);
  
    if (existingBurger) {
      // Item already exists in localStorage
      const confirmAdd = window.confirm('This burger is already in your cart. Do you still want to add it?');
      if (!confirmAdd) {
        return; // If the user cancels, exit the function
      }
      existingBurger.burger.quantity += 1;
    } else {
      existingBurger = { burger: { id, name, price, quantity: 1  }};
      existingItems.push(existingBurger);
    }
  
    localStorage.setItem('selectedBurger', JSON.stringify(existingItems));
  }
  
  return (
    <div className="card">
      <Link to={`/burgers/${id}`}>   
        <div>
              <img src={image} />
              <h1>{name}</h1>
              <p>{price} <span>kr</span></p> 
        </div>
      </Link>
        <button onClick={addToCart}>Add to Cart</button>
        </div>

  );
}
export default BurgerCards;