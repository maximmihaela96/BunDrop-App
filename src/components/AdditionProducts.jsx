
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
      // If the potato is already selected, remove it from the array
      setSelectedPotatoes(selectedPotatoes.filter((item) => item.id !== potato.id));
    } else {
      // If the potato is not selected, add it to the array
      setSelectedPotatoes([...selectedPotatoes, potato]);
    }
  }

  function handleDrinkSelection(drink) {
    const isSelected = selectedDrinks.some((item) => item.id === drink.id);
    if (isSelected) {
      // If the drink is already selected, remove it from the array
      setSelectedDrinks(selectedDrinks.filter((item) => item.id !== drink.id));
    } else {
      // If the drink is not selected, add it to the array
      setSelectedDrinks([...selectedDrinks, drink]);
    }
  }

  function handleAddPotatoes() {
    localStorage.setItem("selectedPotatoes", JSON.stringify(selectedPotatoes));
  }
  function handleAddDrinks() {
    localStorage.setItem("selectedDrinks", JSON.stringify(selectedDrinks));
  }
  // useEffect(() => {
    
  //   const savedSelectedPotatoes = localStorage.getItem("selectedPotatoes");
  //   const savedSelectedDrink = localStorage.getItem("selectedDrinks");
  //   if (savedSelectedPotatoes) {
  //     selectedPotatoes(JSON.parse(savedSelectedPotatoes));
  //   }
  //   if (savedSelectedDrink) {
  //     setSelectedDrinks(JSON.parse(savedSelectedDrink));
  //   }
  // }, []);

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
          <button onClick={handleAddPotatoes}>Add Potatis</button>
          <button onClick={handleAddDrinks}>Add Drinks</button>
        </div>
      );
    };
export default AdditionProducts
