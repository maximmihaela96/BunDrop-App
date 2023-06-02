import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShoppingCart() {

  const [selectedBurger, setSelectedBurger] = useState( JSON.parse(localStorage.getItem("selectedBurger")) || []);
  const [selectedPotatoes, setSelectedPotatoes] = useState(JSON.parse(localStorage.getItem("selectedPotatoes")) || []);
  const [selectedDrinks, setSelectedDrinks] = useState( JSON.parse(localStorage.getItem("selectedDrinks")) || [] );


  function handleDeleteBurger(id) {
    const updatedSelectedBurger = selectedBurger.filter((item) => item.id !== id);
    setSelectedBurger(updatedSelectedBurger);
    localStorage.setItem("selectedBurger", JSON.stringify(updatedSelectedBurger));
  }

  function handleDeletePotatoes(id) {
    const updatedSelectedPotatoes = selectedPotatoes.filter( (item) => item.id !== id );
    setSelectedPotatoes(updatedSelectedPotatoes);
    localStorage.setItem("selectedPotatoes", JSON.stringify(updatedSelectedPotatoes));
  }

  function handleDeleteDrinks(id) {
    const updatedSelectedDrinks = selectedDrinks.filter((item) => item.id !== id);
    setSelectedDrinks(updatedSelectedDrinks);
    localStorage.setItem("selectedDrinks", JSON.stringify(updatedSelectedDrinks));
  }

  return (
    <div>
    <h2>Shopping Cart</h2>
    <div className="burger-container">
      {selectedBurger.map((b) => (
        <div key={b.id}>
          <h4>{b.name}</h4>
          <p>{b.price}</p>
          <button onClick={() => handleDeleteBurger(b.id)}>Remove</button>
        </div>
      ))}
    </div>

    <div className="potatoes-container">
    {selectedPotatoes?.length > 0 ? (
      selectedPotatoes.map((p) => (
        <div key={p.id}>
          <h1>Potatoes {p.name}</h1>
          <p>{p.price}</p>
          <button onClick={() => handleDeletePotatoes(p.id)}>Remove</button>
          
        </div>
      ))
      ) : (
      <p>No potatoes selected</p>
      )}
    </div>

    <div className="drinks-container">
    {selectedDrinks?.length > 0 ? (
      selectedDrinks.map((d) => (
        <div key={d.id}>
          <h1> Drinks {d.name}</h1>
          <p>{d.price}</p>
          <button onClick={() => handleDeleteDrinks(d.id)}>Remove</button>
        </div>
      ))
      ) : (
      <p>No drinks selected</p>
      )}
    </div>
    <Link to={"/payment"}> <button>Go to payment</button> </Link>
    <Link to={"/burgers"}> <button>Back to Many</button> </Link>

  </div>

  )
}

export default ShoppingCart
