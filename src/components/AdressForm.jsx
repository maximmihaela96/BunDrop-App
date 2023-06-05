import React from 'react';

function AddressForm({
    firstName, setFirstName,
    lastName, setLastName,
    streetAddress, setStreetAddress,
    city, setCity,
    postalCode, setPostalCode,
    country, setCountry
  }){

  function handleSubmit(e){
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setStreetAddress('');
    setCity('');
    setPostalCode('');
    setCountry('');
  };


  return (
  <div>
  <h2>Delivery Details</h2>
    <form onSubmit={handleSubmit}>
      <div> First Name:
        <input type="text" name="firstName" value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required/>
      </div>
    
      <div> Last Name:
        <input type="text" name="lastName" value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required/>
      </div>
      
      <div> Street Address:
        <input type="text" name="streetAddress" value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          required/>
      </div>

      <div> City:
        <input type="text" name="city" value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      <div> Postal Code:
        <input type="text" name="postalCode" value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required/>
      </div>

      <div> Country:
        <input type="text" name="country" value={country}
          onChange={(e) => setCountry(e.target.value)}
          required/>
      </div>
      
    </form>
    </div>
  );
};

export default AddressForm;