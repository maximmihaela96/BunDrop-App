
import React, { useState } from "react";

function AdditionProducts({ fries, drinks  }) {

  const [selectedFries, setSelectedFries] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  function handleFriesSelection(fries) {

    setSelectedFries((prevSelectedFries) => {
    const isSelected = selectedFries.some((item) => item.id === fries.id);
    if (isSelected) {
      const updatedFries = prevSelectedFries.filter((item) => item.id !== fries.id);
      localStorage.setItem("selectedFries", JSON.stringify(updatedFries));
      return updatedFries;
    } else {
      const updatedFries = [...prevSelectedFries, fries];
      localStorage.setItem("selectedFries", JSON.stringify(updatedFries));
      return updatedFries;
    }
  });
  }

  function handleDrinkSelection(drink) {
    setSelectedDrinks((prevSelectedDrinks) => {
      const isSelected = prevSelectedDrinks.some((item) => item.id === drink.id);
      if (isSelected) {
        const updatedDrinks = prevSelectedDrinks.filter((item) => item.id !== drink.id);
        localStorage.setItem("selectedDrinks", JSON.stringify(updatedDrinks));
        return updatedDrinks;
      } else {
        const updatedDrinks = [...prevSelectedDrinks, drink];
        localStorage.setItem("selectedDrinks", JSON.stringify(updatedDrinks));
        return updatedDrinks;
      }
    });
  }

return (
  <div>
    <div style={{ display: 'inline-flex', backgroundColor:'#333' }}>
      <div>
        <h2> Choose your fries:</h2>
          <ul>
            {fries?.map((fries) => (
              <div key={fries.id}>
                <label>
                <img src={process.env.PUBLIC_URL + fries.image} alt="" style={{ width: '50px', height: '50px' }} />
                 {fries.name}
                 {fries.price} kr

                <input type="checkbox"
                 onChange={() => handleFriesSelection(fries)}
                 checked={selectedFries.some((item) => item.id === fries.id)}
                 />
                 </label>
               </div>
             ))}
           </ul>
      </div>

      <div>
        <h2>Choose your Drink:</h2>
          <ul>
            {drinks?.map((drink) => (
              <div key={drink.id}>
              
              <img src={process.env.PUBLIC_URL + drink.image} alt="" style={{ width: '50px', height: '50px' }} />
              {drink.name}
              {drink.price}
              <input type="checkbox"
                 onChange={() => handleDrinkSelection(drink)}
                 checked={selectedDrinks.some((item) => item.id === drink.id)}
                 />
                 
                 </div>
               ))}
             </ul>
      </div>
    </div>
  </div>
)};
export default AdditionProducts
