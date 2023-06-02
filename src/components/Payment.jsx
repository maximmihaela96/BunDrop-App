import React, { useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
    const [selectedBurger, setSelectedBurger] = useState( JSON.parse(localStorage.getItem("selectedBurger")));
    const [selectedPotatoes, setSelectedPotatoes] = useState(JSON.parse(localStorage.getItem("selectedPotatoes")));
    const [selectedDrinks, setSelectedDrinks] = useState( JSON.parse(localStorage.getItem("selectedDrinks")));
    
  function calculateTotal() {
      const burgerTotal = selectedBurger.reduce((total, b) => total + b.price, 0);
      const potatoesTotal = selectedPotatoes.reduce(
        (total, p) => total + p.price, 0);
      const drinksTotal = selectedDrinks.reduce((total, d) => total + d.price, 0);
      return burgerTotal + potatoesTotal + drinksTotal;
    }

  function handlePlaceOrder() {
      const allItems = [...selectedBurger, ...selectedPotatoes, ...selectedDrinks];
      const uploadItems = { totalPrice: calculateTotal(),   shoppingCartItems: allItems, };
      fetch("http://localhost:7000/orders", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadItems),
          })
          .then((response) => response.json())
          .then((data) => {
              console.log("Order placed successfully:", data);
              // Clear the local storage
               localStorage.clear();
               setSelectedBurger([]);
               setSelectedPotatoes([]);
               setSelectedDrinks([]);
          })
      .catch((error) => {
          console.error("Error placing order:", error);
      });
  }

return (
  <div>
   <h2>Payment</h2>
  <div className="burger-container">
    {selectedBurger?.map((b) => (
      <div key={b.id}>
        <h4>Burgers -  {b.name}<span> - {b.price} kr</span></h4> 
      </div>
    ))}
  </div>

  <div className="potatoes-container">
  {selectedPotatoes?.map((p) => (
      <div key={p.id}>
        <h4>Potatoes - {p.name}<span> - {p.price} kr</span></h4> 
      </div>
    ))}
  </div>

  <div className="drinks-container">
  {selectedDrinks?.map((d) => (
      <div key={d.id}>
        <h4> Drinks - {d.name} <span> - {d.price} kr</span></h4> 
      </div>
  ))}
  </div>

  <div>
      <h1>Total:{calculateTotal()}</h1>
  </div>
    <button onClick={handlePlaceOrder}>Order New</button>
    <button>Cancel the order</button>
    <Link to="/shopping-cart">
      <button>Back to Shopping Cart</button>
    </Link>
  </div>
)
}

export default Payment
