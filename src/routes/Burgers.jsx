import React, { useEffect, useState } from "react";
import '../services/BurgerPage.css';
import BurgerCards from "../components/BurgerCards";
import DrinksCard from "../components/DrinksCards";
import FriesCards from "../components/FriesCards";

function Burgers() {
  const [allBurgers, setAllBurgers] = useState([]);
  const [allAdditions, setAddition] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/burgers")
      .then((res) => res.json())
      .then((data) => {
        setAllBurgers(data); 
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:7000/addition`)
      .then((res) => res.json())
      .then((data) => setAddition(data));
  } , [] );

  return (
    <div> 
      <h1 className="page-title">Burgers</h1>
      <div>
        {allBurgers.map((burger) => (
          <BurgerCards
            key={burger.id}
            id={burger.id}
            name={burger.name}
            price={burger.price}
            image={burger.image}
          />
        ))}

        {allAdditions?.map((drinks) => (
        <DrinksCard key={drinks.id}  drinks={drinks.drinks}/>
        ))}

        {allAdditions?.map((fries) => (
        <FriesCards key={fries.id}  fries={fries.fries}/>
        ))}
      </div>
    </div>
  );
}

export default Burgers;
