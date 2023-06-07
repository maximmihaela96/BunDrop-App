import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import '../services/BurgerDetailsPage.css';
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
  }, [productId]);

  useEffect(() => {
    fetch(`http://localhost:7000/addition`)
      .then((res) => res.json())
      .then((data) => setAddition(data));
  }, []);

  function addToCart() {
    const existingItems = JSON.parse(localStorage.getItem('selectedBurger')) || [];
    const existingBurgerIndex = existingItems.findIndex(item => item.burger.id === burger.id);
  
    if (existingBurgerIndex !== -1) {
      // Item already exists in localStorage
      const existingBurger = existingItems[existingBurgerIndex];
      const confirmAdd = window.confirm('This burger is already in your cart. Do you still want to add it?');
      if (!confirmAdd) {
        return; // If the user cancels, exit the function
      }
      existingBurger.burger.quantity += 1;
      existingItems[existingBurgerIndex] = existingBurger;
    } else {
      const newBurger = { burger: { id: burger.id, name: burger.name, price: burger.price, quantity: quantity } };
      existingItems.push(newBurger);
    }
  
    localStorage.setItem('selectedBurger', JSON.stringify(existingItems));
  }

  function redirectToShoppingCart() {
    const selectedBurger = JSON.parse(localStorage.getItem('selectedBurger'));
    const selectedDrinks = JSON.parse(localStorage.getItem('selectedDrinks'));
    const selectedFries = JSON.parse(localStorage.getItem('selectedFries'));

    if ((Array.isArray(selectedFries) && selectedFries.length > 0)
      || (Array.isArray(selectedBurger) && selectedBurger.length > 0)
      || (Array.isArray(selectedDrinks) && selectedDrinks.length > 0)) {
      navigate('/shopping-cart'); // Redirect to the shopping cart
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
        <button className="addToCard-button" onClick={addToCart}>Add To Shopping Cart</button>
      </div>

      <div className="addition-container">
        {addition?.map((addition) => (
          <AdditionProducts key={addition.id} fries={addition.fries} drinks={addition.drinks} />
        ))}
      </div>
      <Link to={"/burgers"}><button>Back to Menu</button></Link>
      <button onClick={redirectToShoppingCart}>Go to Shopping Cart</button>
    </div>
  );
}

export default BurgerItem;
