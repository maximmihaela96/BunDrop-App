import React, { useEffect, useState } from 'react';
import '../services/CardDetails.css';

function CardDetails({
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  expiryDate,
  setExpiryDate,
  cvv,
  setCvv,
  setCardDetailsValid,
}) {
  const [isCardNumberValid, setCardNumberValid] = useState(true);
  const [isCardNameValid, setCardNameValid] = useState(true);
  const [isExpiryDateValid, setExpiryDateValid] = useState(true);
  const [isCvvValid, setCvvValid] = useState(true);

  useEffect(() => {
    validateCardDetails();
  }, [cardNumber, cardName, expiryDate, cvv]);

  function validateCardDetails() {
    const cardNumberValid = cardNumber.trim() !== "";
    const cardNameValid = cardName.trim() !== "";
    const expiryDateValid = expiryDate.trim() !== "";
    const cvvValid = cvv.trim() !== "";

    setCardNumberValid(cardNumberValid);
    setCardNameValid(cardNameValid);
    setExpiryDateValid(expiryDateValid);
    setCvvValid(cvvValid);

    const isFormValid = cardNumberValid && cardNameValid && expiryDateValid && cvvValid;
    setCardDetailsValid(isFormValid);
  }

  return (
    <div className="card-details-container">
      <h2>Card Payment Details</h2>
      <div className="form-row">
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          className={isCardNumberValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>Cardholder Name:</label>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
          className={isCardNameValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>Expiry Date:</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          className={isExpiryDateValid ? '' : 'invalid'}
        />
      </div>

      <div className="form-row">
        <label>CVV:</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
          className={isCvvValid ? '' : 'invalid'}
        />
      </div>
    </div>
  );
}

export default CardDetails;
