import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../services/ShoppingCart.css';

function ShoppingCart() {

  const [selectedBurger, setSelectedBurger] = useState( JSON.parse(localStorage.getItem("selectedBurger")) || []);
  const [selectedFries, setSelectedFries] = useState(JSON.parse(localStorage.getItem("selectedFries")) || []);
  const [selectedDrinks, setSelectedDrinks] = useState( JSON.parse(localStorage.getItem("selectedDrinks")) || [] );


  
  function calculateBurgersPrice(item) {
    const burgerPrice = item.burger.price;
    const quantity = item.burger.quantity;
    const itemPrice = burgerPrice * quantity;
    return itemPrice;
  }

  function calculateFriesPrice(fries) {
    const friesPrice = fries.price;
    const quantity = fries.quantity;
    const itemPrice = friesPrice * quantity;
    return itemPrice;
  }

  function calculateDrinksPrice(drinks) {
    const drinkPrice = drinks.price;
    const quantity = drinks.quantity;
    const itemPrice = drinkPrice * quantity;
    return itemPrice;
  }

  function handleDeleteBurger(id) {
    const updatedItems = selectedBurger.filter((item) => item.burger.id !== id);
    setSelectedBurger(updatedItems);
    localStorage.setItem("selectedBurger", JSON.stringify(updatedItems));
  }

  function handleDeleteFries(id) {
    const updatedSelectedFries = selectedFries.filter( (item) => item.id !== id );
    setSelectedFries(updatedSelectedFries);
    localStorage.setItem("selectedFries", JSON.stringify(updatedSelectedFries));
  }

  function handleDeleteDrinks(id) {
    const updatedSelectedDrinks = selectedDrinks.filter((item) => item.id !== id);
    setSelectedDrinks(updatedSelectedDrinks);
    localStorage.setItem("selectedDrinks", JSON.stringify(updatedSelectedDrinks));
  }

  function handleQuantityChange(event, index) {
    const updatedSelectedBurger = [...selectedBurger];
    const newQuantity = parseInt(event.target.value);
    updatedSelectedBurger[index].burger.quantity = newQuantity;
    setSelectedBurger(updatedSelectedBurger);
    localStorage.setItem("selectedBurger", JSON.stringify(updatedSelectedBurger));
  }

  function decreaseQuantity(index) {
    const updatedSelectedBurger = [...selectedBurger];
    const currentQuantity = updatedSelectedBurger[index].burger.quantity;
    if (currentQuantity > 1) {
      updatedSelectedBurger[index].burger.quantity = currentQuantity - 1;
      setSelectedBurger(updatedSelectedBurger);
      localStorage.setItem(
        "selectedBurger",
        JSON.stringify(updatedSelectedBurger)
      );
    }
  }

  function increaseQuantity(index) {
    const updatedSelectedBurger = [...selectedBurger];
    updatedSelectedBurger[index].burger.quantity += 1;
    setSelectedBurger(updatedSelectedBurger);
    localStorage.setItem(
      "selectedBurger",
      JSON.stringify(updatedSelectedBurger)
    );
  }
  
  return (
    <div className="shopping-cart">
    <h2>Shopping Cart</h2>
    <div className="burger-container">
        {selectedBurger?.length > 0 ? (
          selectedBurger.map((burger, index) => (
            <div key={burger.burger.id}>
              <h4>{burger.burger.name}</h4>
              <p>
                Quantity:{" "}
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <input
                  type="number"
                  value={burger.burger.quantity}
                  onChange={(e) => handleQuantityChange(e, index)}
                />
                <button onClick={() => increaseQuantity(index)}>+</button>
              </p>
              <p>Price: {burger.burger.price} Kr/burger</p>
              <p>Total Price: {calculateBurgersPrice(burger).toFixed(2)}kr</p>
              <button onClick={() => handleDeleteBurger(burger.burger.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No burger selected</p>
        )}
      </div>

    <div className="fries-container">
    {selectedFries?.map((fries) => (
        <div key={fries.id}>
          <h4>Fries {fries.name}</h4>
          <p>Price:{fries.price} Kr/st</p>
          <p>Quantity:{fries.quantity}</p>
          <p>Total Price:{calculateFriesPrice(fries).toFixed(2)}kr</p>
          <button onClick={() => handleDeleteFries(fries.id)}>Remove</button>
          
        </div>
       ))}
    </div>

    <div className="drinks-container">
    {selectedDrinks?.map((drink) => (
        <div key={drink.id}>
          <h4> Drinks {drink.name}</h4>
          <p> Price: {drink.price} kr/st</p>
          <p>Quantity:{drink.quantity}</p>
          <p>Total Price:{calculateDrinksPrice(drink).toFixed(2)}kr</p>
          <button onClick={() => handleDeleteDrinks(drink.id)}>Remove</button>
        </div>
      ))}
    </div>

    <Link to={"/payment"}> <button>Go to payment</button> </Link>
    <Link to={"/burgers"}> <button>Back to Many</button> </Link>

  </div>

  )
}

export default ShoppingCart
