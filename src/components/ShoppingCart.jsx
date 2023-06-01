import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function ShoppingCart() {

  const [selectedBurger, setSelectedBurger] = useState(
    JSON.parse(localStorage.getItem("selectedBurger")) || []
  );
  const [selectedPotatoes, setSelectedPotatoes] = useState(
    JSON.parse(localStorage.getItem("selectedPotatoes")) || []
  );
  const [selectedDrinks, setSelectedDrinks] = useState(
    JSON.parse(localStorage.getItem("selectedDrinks")) || []
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [cartUpdated, setCartUpdated] = useState(false);

  function confirmationOrder() {
    setIsModalOpen(true);
  };

  function handleConfirmOrder() {
    // Clear the localStorage
    localStorage.clear();
    setIsModalOpen(false);
    //setCartUpdated(true);
  };

  function handleCancelOrder() {
    setIsModalOpen(false);
  };

  function handlePlaceOrder() {
    // Clear the localStorage
    localStorage.clear();
  };
  function handleDeleteBurger(id) {
    const updatedSelectedBurger = selectedBurger.filter((item) => item.id !== id);
    setSelectedBurger(updatedSelectedBurger);
    localStorage.setItem("selectedBurger", JSON.stringify(updatedSelectedBurger));
  }

  function handleDeletePotatoes(id) {
    const updatedSelectedPotatoes = selectedPotatoes.filter(
      (item) => item.id !== id
    );
    setSelectedPotatoes(updatedSelectedPotatoes);
    localStorage.setItem("selectedPotatoes", JSON.stringify(updatedSelectedPotatoes));
  }

  function handleDeleteDrinks(id) {
    const updatedSelectedDrinks = selectedDrinks.filter((item) => item.id !== id);
    setSelectedDrinks(updatedSelectedDrinks);
    localStorage.setItem("selectedDrinks", JSON.stringify(updatedSelectedDrinks));
  }

  const handleDeleteItem = (itemId) => {
    // Determine the item type (burger or drink) and remove it from localStorage
    if (selectedBurger.find(item => item.id === itemId)) {
      const updatedBurgers = selectedBurger.filter(item => item.id !== itemId);
      localStorage.setItem('selectedBurger', JSON.stringify(updatedBurgers));
      // setCartUpdated(true);
    } else if (selectedDrinks.find(item => item.id === itemId)) {
      const updatedDrinks = selectedDrinks.filter(item => item.id !== itemId);
      localStorage.setItem('selectedDrinks', JSON.stringify(updatedDrinks));
      // setCartUpdated(true);
    } else if (selectedPotatoes.find(item => item.id === itemId)) {
      const updatedPotatoes = selectedPotatoes.filter(item => item.id !== itemId);
      localStorage.setItem('selectedPotatoes', JSON.stringify(updatedPotatoes));
      // setCartUpdated(true);
    }
  };

  // useEffect(() => {
  //   const updatedSelectedBurger = JSON.parse(localStorage.getItem('selectedBurger')) || [];
  //   setSelectedBurger(updatedSelectedBurger);
  //   const updatedSelectedPotatoes = JSON.parse(localStorage.getItem('selectedPotatoes')) || [];
  //   setSelectedPotatoes(updatedSelectedPotatoes);
  //   const updatedSelectedDrinks = JSON.parse(localStorage.getItem('selectedDrinks')) || [];
  //   setSelectedDrinks(updatedSelectedDrinks);
  // }, [cartUpdated]);

  return (
    <div>
    <h2>Shopping Cart</h2>
    <div className="burger-container">
      {selectedBurger.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
          <button onClick={() => handleDeleteBurger(item.id)}>Remove</button>
        </div>
      ))}
    </div>

    <div className="potatoes-container">
    {selectedPotatoes?.length > 0 ? (
      selectedPotatoes.map((p) => (
        <div key={p.id}>
          <h1>Potatoes {p.name}</h1>
          <p>{p.price}</p>
          <button onClick={() => handleDeletePotatoes(p.id)}>Remove</button>
          
        </div>
      ))
      ) : (
      <p>No potatoes selected</p>
      )}
    </div>

    <div className="potatoes-container">
    {selectedDrinks?.length > 0 ? (
      selectedPotatoes.map((d) => (
        <div key={d.id}>
          <h1> Drinks {d.name}</h1>
          <p>{d.price}</p>
          <button onClick={() => handleDeleteDrinks(d.id)}>Remove</button>
        </div>
      ))
      ) : (
      <p>No drinks selected</p>
      )}
    </div>

    <button onClick={confirmationOrder}>Place Order</button>

    <Modal isOpen={isModalOpen}>
        <h2>Confirmation</h2>
        <p>Are you sure you want to place the order?</p>
        <button onClick={handleConfirmOrder}>Yes</button>
        <button onClick={handleCancelOrder}>No</button>
      </Modal>
  </div>

  )
}

export default ShoppingCart
