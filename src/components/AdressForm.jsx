import React, { useEffect, useState } from 'react';
import '../services/CardDetails.css';

function AddressForm({
    firstName, setFirstName,
    lastName, setLastName,
    country, setCountry,
    streetAddress, setStreetAddress,
    city, setCity,
    postalCode, setPostalCode,
    setDeliveryDetailsValid,
  }){

    const [isFirstNameValid, setFirstNameValid] = useState(true);
    const [isLastNameValid, setLastNameValid] = useState(true);
    const [isCountryValid, setCountryValid] = useState(true);
    const [isStreetAddressValid, setStreetAddressValid] = useState(true);
    const [isCityValid, setCityValid] = useState(true);
    const [isPostalCodeValid, setPostalCodeValid] = useState(true);

    useEffect(() => {
      validateDeliveryDetails();
    }, [firstName, lastName,country, streetAddress, city, postalCode ]);

    function validateDeliveryDetails() {

      const firstNameValid = firstName.trim() !== "";
      const lastNameValid = lastName.trim() !== "";
      const countryValid = country.trim() !== "";
      const streetAddressValid = streetAddress.trim() !== "";
      const cityValid = city.trim() !== "";
      const postalCodeValid = postalCode.trim() !== "";
  
      setFirstNameValid(firstNameValid);
      setLastNameValid(lastNameValid);
      setCountryValid(countryValid);
      setStreetAddressValid(streetAddressValid);
      setCityValid(cityValid);
      setPostalCodeValid(postalCodeValid);
  
      const isFormValid = firstNameValid && lastNameValid && countryValid && streetAddressValid && cityValid && postalCodeValid;
      setDeliveryDetailsValid(isFormValid);
    }


  return (
    <div className="delivery-details-container">
      <h2>Delivery Details</h2>
      <div className="form-row">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className={isFirstNameValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className={isLastNameValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className={isCountryValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>Street:</label>
        <input
          type="text"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          required
          className={isStreetAddressValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className={isCityValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>Postal Code:</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
          className={isPostalCodeValid ? '' : 'invalid'}
        />
      </div>

    </div>
  );
}


export default AddressForm;