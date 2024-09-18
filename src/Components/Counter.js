//Задание 2 (тайминг 25 минут)
// 1. Разработайте компонент Counter, который отображает
// две кнопки: одна для увеличения значения на 1, а другая
// уменьшения на 1.
// 23 Используйте хук useState для управления состоянием
// 2.
// Кнопки можно сделать с помощью material ui

import React, { useState } from 'react';
import { Button } from "@mui/material";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(prevCount => prevCount+1);
    };

    const decrement = () =>{
        setCount(prevCount => prevCount-1);
    };

  return (

    <div>
        <Button variant='contained' color='primary' onClick={increment}>+</Button>
        {count}
        <Button variant='contained' color='secondary' onClick={decrement}>-</Button>
    </div>

  );
};

export default Counter;
