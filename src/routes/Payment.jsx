import React, { useState } from 'react';
import CardDetails from '../components/CardDetails';
import AdressForm from '../components/AdressForm';

function Payment() {

  const [selectedBurger, setSelectedBurger ] = useState( JSON.parse(localStorage.getItem("selectedBurger")) || []);
  const [selectedFries, setSelectedFries ] = useState(JSON.parse(localStorage.getItem("selectedFries")) || []);
  const [selectedDrinks, setSelectedDrinks] = useState( JSON.parse(localStorage.getItem("selectedDrinks")) || [] );

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  

  function calculateItemPrice(item) {
    const burgerPrice = item.burger.price;
    const quantity = item.quantity;
    const itemPrice = burgerPrice * quantity;
    return itemPrice;
  }
  // Calculate total price for burgers
  let burgerTotalPrice = 0;
  if (selectedBurger) {
    burgerTotalPrice = selectedBurger.reduce((total, item) => {
      const burger = item.burger;
      const quantity = item.quantity;
      return total + burger.price * quantity;
    }, 0);
  }
  
  // Calculate total price for fries
  let friesTotalPrice = 0;
  if (selectedFries) {
    friesTotalPrice = selectedFries.reduce((total, fries) => {
      const quantity = 1; // Assuming fries quantity is always 1
      return total + fries.price * quantity;
    }, 0);
  }
  
  // Calculate total price for drinks
  let drinksTotalPrice = 0;
  if (selectedDrinks) {
    drinksTotalPrice = selectedDrinks.reduce((total, drink) => {
      const quantity = 1; // Assuming drink quantity is always 1
      return total + drink.price * quantity;
    }, 0);
  }
  
  // Calculate the total payment price
  const totalPrice = (burgerTotalPrice + friesTotalPrice + drinksTotalPrice).toFixed(2);

  function handlePlaceOrder() {
    const order = [...selectedBurger, ...selectedFries, ...selectedDrinks];
    const currentDate = new Date();
    const deliveryDays = Math.floor(Math.random() * 7) + 1; 
    const deliveryDate = new Date(currentDate.getTime() + deliveryDays * 24 * 60 * 60 * 1000); // Add the random number of days
    
    const orderData = {
      totalPrice: totalPrice,
      deliveryDate: deliveryDate,
      order: order,
      cardDetails: {
        cardNumber: cardNumber,
        cardName: cardName,
        expiryDate: expiryDate,
        cvv: cvv
      },
      adressDetails: {
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        city: city,
        postalCode: postalCode,
        country: country,
      }
    };

    fetch("http://localhost:7000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order placed successfully:", data);
        // Clear the local storage and reset selected items
        localStorage.clear();
        setSelectedBurger([]);
        setSelectedFries([]);
        setSelectedDrinks([]);

      // Reset the card details inputs
        setCardNumber("");
        setCardName("");
        setExpiryDate("");
        setCvv("");

      // Reset the address details inputs
        setFirstName("");
        setLastName("");
        setStreetAddress("");
        setCity("");
        setPostalCode("");
        setCountry("");
        
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  }

return (
  
<div>
<h2>Order:</h2>

    <h3>Selected Burgers:</h3>
      {selectedBurger.map((item) => {
      const burger = item.burger;
      const quantity = item.quantity;
      return (
        <div key={burger.id}>
          <p>Name: {burger.name}</p>
          <p>Price: {burger.price} x {quantity}</p>
          <p>Total Price:{calculateItemPrice(item).toFixed(2)}kr</p>
        </div>
      );
    })}

    <h3>Selected Fries:</h3>
      {selectedFries.map((fries) => (
          <div key={fries.id}>
            <p>Name: {fries.name}</p>
            <p>Price: {fries.price}</p>
          </div>
    ))}

    <h3>Selected Drinks:</h3>
      {selectedDrinks.map((drink) => (
      <div key={drink.id}>
        <p>Name: {drink.name}</p>
        <p>Price: {drink.price}</p>
      </div>
    ))}

    <h4>Total Price: {totalPrice}</h4>

    <div>
      <CardDetails
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardName={cardName}
          setCardName={setCardName}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          cvv={cvv}
          setCvv={setCvv}
        />
    </div>

    <div>
      <AdressForm
          firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          streetAddress={streetAddress} setStreetAddress={setStreetAddress}
          city={city} setCity={setCity}
          postalCode={postalCode} setPostalCode={setPostalCode}
          country={country} setCountry={setCountry}
        />
    </div>

      <button type="button" onClick={handlePlaceOrder}>Place Order</button>
      <button type="button" >Cancel Order</button>
      //Poput with the price and expire date
</div>

 );   
}
export default Payment
