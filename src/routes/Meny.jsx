import React, { useEffect, useState } from "react";
import "../services/Meny.css";
import BurgerCards from "../components/BurgerCards"; // You may need to create this component

function Burgers() {
  const [allBurgers, setAllBurgers] = useState([]);

  useEffect(() => {
    fetch("https://maximmihaela96.github.io/api_BunDrop/meny.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllBurgers(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="meny-container">
      <h1 className="burger-page-title">Burgers Menu</h1>
      <div className="cards-container">
        {allBurgers.map((burger) => (
          <BurgerCards
            key={burger.id} // Make sure each burger has a unique key
            name={burger.name}
            price={burger.price}
            description={burger.description}
            image={burger.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Burgers;
