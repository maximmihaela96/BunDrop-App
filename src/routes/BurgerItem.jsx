import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../services/Items.css';
import AdditionProducts from "../components/AdditionProducts";

function BurgerItem() {

  const { productId } = useParams();
  const [burger, setBurger] = useState({});
  const [addition, setAddition] = useState();
  const [quantity, setQuantity] = useState(1);

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
    const item  = { burger, quantity };
    existingItems.push(item);
    localStorage.setItem('selectedBurger', JSON.stringify(existingItems));
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div>
      <div className="burger-item">
          <img src={process.env.PUBLIC_URL + burger.image} alt="" />
          <h1>{burger.name}</h1>
          <em>{burger.price} $</em>

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
      <Link to={"/shopping-cart"}> <button>Go to ShoppingCart</button> </Link>
    </div>
    
  );
}

export default BurgerItem;