import React from "react";
import '../services/ProductCards.css';


function FriesCards({ fries }) {

  function addToCart(selectedFries) {
      const existingItems = JSON.parse(localStorage.getItem('selectedFries')) || [];
    
      // Check if the selectedFries already exists in the array
      const existingFries = existingItems.find((item) => item.id === selectedFries.id);
    
      if (existingFries) {
              // Item already exists in localStorage
              const confirmAdd = window.confirm('This fries is already in your cart. Do you still want to add it?');
              if (!confirmAdd) {
                return; // If the user cancels, exit the function
              }
        existingFries.quantity += 1;
      } else {
        // If the item doesn't exist, add it with quantity 1
        const confirmAddSuccesfully = window.confirm('This fries was added in the cart!');
        selectedFries.quantity = 1;
        existingItems.push(selectedFries);
      }
      localStorage.setItem('selectedFries', JSON.stringify(existingItems));
}

  return (

    <div>
      {fries?.map((fries) => (
        <div className="card" key={fries.id}>
          <img src={process.env.PUBLIC_URL + fries.image} />
          <h1>{fries.name}</h1>
          <p>{fries.price} <span>kr</span></p>
          <button onClick={() => addToCart(fries)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default FriesCards
