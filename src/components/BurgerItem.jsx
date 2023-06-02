import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../services/Items.css';
import AdditionProducts from "./AdditionProducts";

function BurgerItem() {

  const { productId } = useParams();
  const [burger, setBurger] = useState({});
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:7000/burgers/${productId}`)
      .then((res) => res.json())
      .then((data) => setBurger(data));
  } , [productId] );


  useEffect(() => {
    fetch(`http://localhost:7000/addition`)
      .then((res) => res.json())
      .then((data) => setData(data));
  } , [] );

  function addToCart() {
    // Retrieve existing cart items from localStorage or initialize an empty array
    const existingItems = JSON.parse(localStorage.getItem('selectedBurger')) || [];
    // Add the current burger to the cart items array
    existingItems.push(burger);
    // Update the cart items in localStorage
    localStorage.setItem('selectedBurger', JSON.stringify(existingItems));
  };

  return (
    <div>
      <div className="burger-item">
          <img src={process.env.PUBLIC_URL + burger.image} alt="" />
          <h1>{burger.name}</h1>
          <em>{burger.price} $</em>
          <button className="addToCard-button" onClick={addToCart}>Add To ShoppingCard</button>
      </div>

      <div className="adition-container">
      {data?.map((item) => (
        <AdditionProducts key={item.id} potatoes={item.potatoes} drinks={item.drinks}/>
        ))}
      </div>
      <Link to={"/burgers"}> <button>Back to Many</button> </Link>
      <Link to={"/shopping-cart"}> <button>Go to ShoppingCart</button> </Link>
    </div>

    
  );
}

export default BurgerItem;