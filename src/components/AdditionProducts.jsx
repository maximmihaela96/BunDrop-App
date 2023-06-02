
import React, { useState } from "react";

function AdditionProducts({ fries, drinks  }) {

// if (performance.navigation.type === 1) {
//   // Clear the local storage
//   localStorage.clear();
// }

  const [selectedFries, setSelectedFries] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);


  //When an item is selected, it is added to the selectedFries array and stored in localStorage.
  //When an item is deselected, it is removed from the selectedFries array from localStorage
  function handleFriesSelection(fries) {
    //prevSelectedFries - previous state of the selected fries
    setSelectedFries((prevSelectedFries) => {
    //select the fries and put into const isSelected
    const isSelected = selectedFries.some((item) => item.id === fries.id);
    //if some fries is selected - true
    if (isSelected) {
      //prevSelectedFries array is filtered to remove the fries item using filter()
      //updated fries array is stored in the updatedFries variable.
      const updatedFries = prevSelectedFries.filter((item) => item.id !== fries.id);
      //The updatedFries array is then stored in the localStorage
      localStorage.setItem("selectedFries", JSON.stringify(updatedFries));
      //updatedFries array is returned from the callback function
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
    {/* <div>
          <button onClick={handleAddAdditions}>Add Additions</button> 
        </div> */}
  </div>
)};
export default AdditionProducts
