import React, { useEffect, useState } from "react";
import '../services/BurgerPage.css';
import BurgerCards from "./BurgerCards";

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
        {allBurgers.map((b) => (
          <BurgerCards key={b.id} id={b.id} name={b.name} price={b.price} image={b.image} />
        ))}
      </div>
    </div>
    );
}

export default Burgers;
