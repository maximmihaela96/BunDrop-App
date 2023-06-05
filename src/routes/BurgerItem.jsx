import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import '../services/Items.css';
import AdditionProducts from "../components/AdditionProducts";

function BurgerItem() {

  const { productId } = useParams();
  const [burger, setBurger] = useState({});
  const [addition, setAddition] = useState();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7000/burgers/${productId}`)
      .then((res) => res.json())
      .then((data) => setBurger(data));
  } , [productId] );

  useEffect(() => {
    fetch(`http://localhost:7000/addition`)
      .then((res) => res.json())
      .then((data) => setAddition(data));
  } , [] );

  function addToCart() {
    const existingItems = JSON.parse(localStorage.getItem('selectedBurger')) || [];
    const itemIndex = existingItems.findIndex(item => item.burger.id === burger.id);
    if (itemIndex !== -1) {
      // If the burger already exists, update the quantity
      existingItems[itemIndex].quantity += quantity;
    } else {
    const item  = { burger, quantity };
    existingItems.push(item);
    }
    localStorage.setItem('selectedBurger', JSON.stringify(existingItems));
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  function redirectToShoppingCart() {
    const selectedBurger = JSON.parse(localStorage.getItem('selectedBurger'));
    const selectedDrinks = JSON.parse(localStorage.getItem('selectedDrinks'));
    const selectedFries = JSON.parse(localStorage.getItem('selectedFries'));

    if (  (Array.isArray(selectedFries) && selectedFries.length > 0) 
          || (Array.isArray(selectedBurger) && selectedBurger.length > 0) 
          || (Array.isArray(selectedDrinks) && selectedDrinks.length > 0)) {
      navigate('/shopping-cart'); // Redirect to the shopping card
    } else {
      window.alert('You have not selected anything yet! ');
    }
  }

  return (
    <div>
      <div className="burger-item">
          <img src={process.env.PUBLIC_URL + burger.image} alt="" />
          <h1>Name: {burger.name}</h1>
          <em>Price: {burger.price} kr</em>

          <select value={quantity} onChange={handleQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <button className="addToCard-button" onClick={addToCart}>Add To ShoppingCard</button>
      </div>

      <div className="adition-container">
      {addition?.map((addition) => (
        <AdditionProducts key={addition.id} fries={addition.fries} drinks={addition.drinks}/>
        ))}
      </div>
      <Link to={"/burgers"}> <button>Back to Many</button> </Link>
      <button onClick={redirectToShoppingCart}>Go to ShoppingCart</button>
    </div>
    
  );
}

export default BurgerItem;