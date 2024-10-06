import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const celsiusValue = e.target.value;
        setCelsius(celsiusValue);
        const fahrenheitValue = celsiusValue ? (celsiusValue * 9/5) + 32 : '';
        setFahrenheit(fahrenheitValue);
    };

    const handleFahrenheitChange = (e) => {
        const fahrenheitValue = e.target.value;
        setFahrenheit(fahrenheitValue);
        const celsiusValue = fahrenheitValue ? (fahrenheitValue - 32) * 5/9 : '';
        setCelsius(celsiusValue);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Конвертер Температуры
            </Typography>
            <TextField 
                label="Цельсий (°C)"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
                style={{ marginBottom: '20px' }}
            />
            <TextField 
                label="Фаренгейт (°F)"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                style={{ marginBottom: '20px' }}
            />
            <Button
                variant="contained"
                onClick={() => {
                    setCelsius('');
                    setFahrenheit('');
                }}
            >
                Сбросить
            </Button>
        </Container>
    );
};

export default TemperatureConverter;