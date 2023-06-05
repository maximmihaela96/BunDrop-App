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
  setPaymentMethod,
}) {
  const [isCardNumberValid, setCardNumberValid] = useState(true);
  const [isCardNameValid, setCardNameValid] = useState(true);
  const [isExpiryDateValid, setExpiryDateValid] = useState(true);
  const [isCvvValid, setCvvValid] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  useEffect(() => {
    validateCardDetails();
  }, [cardNumber, cardName, expiryDate, cvv]);

  function validateCardDetails() {
    // const cardNumberValid = cardNumber.trim() !== '';
    // const cardNameValid = cardName.trim() !== '';
    // const expiryDateValid = expiryDate.trim() !== '';
    // const cvvValid = cvv.trim() !== '';
    const cardNumberValid = selectedPaymentMethod === 'swish' || cardNumber.trim() !== '';
    const cardNameValid = selectedPaymentMethod === 'swish' || cardName.trim() !== '';
    const expiryDateValid = selectedPaymentMethod === 'swish' || expiryDate.trim() !== '';
    const cvvValid = selectedPaymentMethod === 'swish' || cvv.trim() !== '';
    
    setCardNumberValid(cardNumberValid);
    setCardNameValid(cardNameValid);
    setExpiryDateValid(expiryDateValid);
    setCvvValid(cvvValid);

    const isFormValid = cardNumberValid && cardNameValid && expiryDateValid && cvvValid;
    setCardDetailsValid(isFormValid);
  }

  function handlePaymentMethodChange(e) {
    setSelectedPaymentMethod(e.target.value);
    setPaymentMethod(e.target.value); // Pass the selected payment method to the parent component
  }

  return (
    <div className="card-details-container">
      <h2>Card Payment Details</h2>
      <div className="form-row">
        <label>Payment Method:</label>
        <div>
          <input
            type="radio"
            id="paymentMethodCard"
            name="paymentMethod"
            value="card"
            checked={selectedPaymentMethod === 'card'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="paymentMethodCard">Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="paymentMethodSwish"
            name="paymentMethod"
            value="swish"
            checked={selectedPaymentMethod === 'swish'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="paymentMethodSwish">Swish</label>
        </div>
      </div>

      {selectedPaymentMethod === 'card' && (
        <>
          <div className="form-row">
            <label>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className={isCardNumberValid ? '' : 'invalid'}
            />
          </div>

          <div className="form-row">
            <label>Cardholder Name:</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className={isCardNameValid ? '' : 'invalid'}
            />
          </div>

          <div className="form-row">
            <label>Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className={isExpiryDateValid ? '' : 'invalid'}
            />
          </div>

          <div className="form-row">
            <label>Your CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className={isCvvValid ? '' : 'invalid'}
            />
          </div>
        </>
      )}

      {selectedPaymentMethod === 'swish' && (
        <div className="form-row">
          <label>Swish Phone Number:</label>
          <input
            type="text"
            value={cardNumber} // You can reuse the cardNumber state to capture the phone number
            onChange={(e) => setCardNumber(e.target.value)}
            className={isCardNumberValid ? '' : 'invalid'}
          />
        </div>
      )}
    </div>
  );
}

export default CardDetails;
