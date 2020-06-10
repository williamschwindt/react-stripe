import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import './App.css';

const stripePromise = loadStripe("pk_test_51GsZPvCJlpZwuAU31Qgj4BlBQtSqrJYvpqBzFxtQRl2U4xc1Vwv7x1sHd1nAWVJPnQ3XhuREIbrvnO4zaeEEJcUt00YB2dCWDd");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
