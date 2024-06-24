import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    if (cardNumber && expiryDate && cvv && nameOnCard) {
      setPaymentError(null);
      setPaymentSuccess(true);
    } else {
      setPaymentError('Please fill out all fields.');
    }
  };

  return (
    <div className="payment-form">
      <h3>Payment Information</h3>
      <Form onSubmit={handleSubmit} className='inner-form'>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number:</Form.Label>
          <Form.Control
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="expiryDate">
          <Form.Label>Expiry Date:</Form.Label>
          <Form.Control
            type="number"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="cvv">
          <Form.Label>CVV:</Form.Label>
          <Form.Control
            type="number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="nameOnCard">
          <Form.Label>Name on Card:</Form.Label>
          <Form.Control
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
          />
        </Form.Group>

        {paymentError && <Alert variant="danger">{paymentError}</Alert>}
        {paymentSuccess && (
          <Alert variant="success">Payment successful! Thank you for your order.</Alert>
        )}
      </Form>
      
      <Button variant="primary" type="submit" onClick={()=> navigate('/order')}>
          Pay Now
        </Button>
    </div>
  );
};

export default PaymentPage;
