import '../services/Cards.css';
import { Link } from "react-router-dom";
import React, {useState } from "react";

function BurgerCards({ name, price, image, id }) {
  const [quantity] = useState(1);

  function addToCart() {

    const existingItems = JSON.parse(localStorage.getItem('selectedBurger')) || [];
    const itemIndex = existingItems.findIndex(item => item.burger.id === id);

    if (itemIndex !== -1) {
      // If the burger already exists, update the quantity
      existingItems[itemIndex].quantity += quantity;
    } else {
    const item  = { burger: { name, price, id }, quantity };
    existingItems.push(item);
    }
    localStorage.setItem('selectedBurger', JSON.stringify(existingItems));
  
  };
  return (
    <div className="card">
      <Link to={`/burgers/${id}`}>   
        <div>
              <img src={image} />
              <h1>{name}</h1>
              <p>{price} <span>$</span></p> 
        </div>
      </Link>
        <button onClick={addToCart}>Add to Cart</button>
        </div>

  );
}
export default BurgerCards;