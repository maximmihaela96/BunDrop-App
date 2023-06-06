import React, {useState } from "react";
import '../services/Cards.css';

function DrinksCard({ drinks }) {

        function addToCart(selectedDrinks) {
            const existingItems = JSON.parse(localStorage.getItem('selectedDrinks')) || [];
            const existingDrinks = existingItems.find((item) => item.id === selectedDrinks.id);
          
            if (existingDrinks) {
              // Item already exists in localStorage
              const confirmAdd = window.confirm('This drink is already in your cart. Do you still want to add it?');
              if (!confirmAdd) {
                return; // If the user cancels, exit the function
              }
              existingDrinks.quantity += 1;
            } else {
              selectedDrinks.quantity = 1;
              existingItems.push(selectedDrinks);
            }
            localStorage.setItem('selectedDrinks', JSON.stringify(existingItems));
        }

  return (

      <div>
      {drinks?.map((drinks) => (
        <div className="card" key={drinks.id}>
          <img src={process.env.PUBLIC_URL + drinks.image} alt="" />
          <h1>{drinks.name}</h1>
          <p>{drinks.price} <span>kr</span></p>
          <button onClick={() => addToCart(drinks)} >Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default DrinksCard