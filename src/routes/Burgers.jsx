import React, { useEffect, useState } from "react";
import '../services/BurgerPage.css';
import BurgerCards from "../components/BurgerCards";

function Burgers() {
    const [allBurgers, setAllBurgers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:7000/burgers")
        .then((res) => res.json())
        .then((data) => {
            setAllBurgers(data); 
        });
    }, []);

    return (
    <div>
       <h1 className="page-title">Burgers</h1>
      <div>
        {allBurgers.map((burger) => (
          <BurgerCards key={burger.id} id={burger.id} name={burger.name} price={burger.price} image={burger.image} />
        ))}
      </div>
    </div>
    );
}

export default Burgers;
