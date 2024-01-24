import React, { useState } from 'react';
import classes from './counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prev => prev + 1);
    };
    return (
        <div>
            <h1 className={classes.h1}>{counter}</h1>
            <button onClick={increment}>inc</button>
        </div>
    );
};

export default Counter;
