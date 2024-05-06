import React, { useState } from 'react';
import axios from 'axios';

const Paymentform = () => {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/payment', {
        amount: 1000, // Example amount (in cents)
        currency: 'usd',
        description: 'Example payment description',
        source: 'tok_visa', // Example test card token
      });

      const data = response.data;

      // Update the UI with payment status
      setPaymentStatus(data.paymentStatus);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };

  return (
    <div>
      {/* Render your payment form fields here */}
      <form onSubmit={handlePayment}>
        {/* Payment form fields */}
        <button type="submit">Pay with Stripe</button>
      </form>
      {paymentStatus && <p>Payment Status: {paymentStatus}</p>}
    </div>
  );
};

export default Paymentform;
