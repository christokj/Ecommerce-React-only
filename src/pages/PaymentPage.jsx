import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const { price } = location.state || {};
    const handlePayment = (e) => {
        e.preventDefault();

        if (!cardNumber || !cardName || !expiryDate || !cvv) {
            setError('All fields are required');
            return;
        }

        setTimeout(() => {
            setSuccess('Payment Successful');
            setError('');
            alert("Payment Successful")
        }, 1000);
    };

    return (
        <Container className="my-20">
            <Paper className="p-5 flex justify-center">
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" onSubmit={handlePayment}>
                    <Typography variant="h4" className="text-center mb-5">
                        Payment Page
                    </Typography>
                    {success && <Alert severity="success">{success}</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                    <div className='grid grid-cols-2'>
                        <TextField
                            required
                            id="card-number"
                            label="Card Number"
                            variant="outlined"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <TextField
                            required
                            id="card-name"
                            label="Card Holder Name"
                            variant="outlined"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                        <TextField
                            required
                            id="expiry-date"
                            label="Expiry Date"
                            variant="outlined"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            variant="outlined"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center mt-5 flex-col">
                        <Typography variant="h6" className="text-center mb-5">Amount: {price}  </Typography>
                        <Button variant="contained" color="primary" type="submit">
                            Pay Now
                        </Button>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
};

export default PaymentPage;
