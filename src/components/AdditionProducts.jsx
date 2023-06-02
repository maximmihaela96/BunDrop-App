
import React, { useState } from "react";

function AdditionProducts({ potatoes, drinks  }) {

// if (performance.navigation.type === 1) {
//   // Clear the local storage
//   localStorage.clear();
// }

  const [selectedPotatoes, setSelectedPotatoes] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  function handlePotatoesSelection(potato) {
    const isSelected = selectedPotatoes.some((item) => item.id === potato.id);
    if (isSelected) {
      setSelectedPotatoes(selectedPotatoes.filter((item) => item.id !== potato.id));
    } else {
      setSelectedPotatoes([...selectedPotatoes, potato]);
    }
  }

  function handleDrinkSelection(drink) {
    const isSelected = selectedDrinks.some((item) => item.id === drink.id);
    if (isSelected) {
      setSelectedDrinks(selectedDrinks.filter((item) => item.id !== drink.id));
    } else {
      setSelectedDrinks([...selectedDrinks, drink]);
    }
  }

  function handleAddAdditions() {
    localStorage.setItem("selectedPotatoes", JSON.stringify(selectedPotatoes));
    localStorage.setItem("selectedDrinks", JSON.stringify(selectedDrinks));
  }

    return (
        <div>
          <h2>Potatoes:</h2>
          <ul>
            {potatoes?.map((potato) => (
              <div key={potato.id}>
                <label>
                <input type="checkbox"
                 onChange={() => handlePotatoesSelection(potato)}
                 checked={selectedPotatoes.some((item) => item.id === potato.id)}
                 />
                 {potato.name}
                </label>
              </div>

            ))}
          </ul>

          <h2>Drinks:</h2>
          <ul>
            {drinks?.map((drink) => (
              <div key={drink.id}>
              <label>
              <input type="checkbox"
                 onChange={() => handleDrinkSelection(drink)}
                 checked={selectedDrinks.some((item) => item.id === drink.id)}
                  />
                {drink.name}
              </label>
            </div>
            ))}
          </ul>
          <button onClick={handleAddAdditions}>Add Additions</button>
        </div>
      );
    };
export default AdditionProducts
