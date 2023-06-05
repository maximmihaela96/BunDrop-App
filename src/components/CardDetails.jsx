import React from 'react';

function CardDetails({
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  expiryDate,
  setExpiryDate,
  cvv,
  setCvv,
}) {

  function handleSubmit(e){
    e.preventDefault();

    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
  };
  
    return (
      
      <div>
        <h2>Card Payment Details</h2>
        <form onSubmit={handleSubmit}>

          <div>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
  
          <div>
            Cardholder Name:
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
  
          <div>
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
  
          <div>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
    );
  }
  
  export default CardDetails;
