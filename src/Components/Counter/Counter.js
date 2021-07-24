import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <div style={{border: '2px solid maroon',textAlign: 'center', marginTop: '20px', padding: '4px'}}>
            <h1>Number of the products: {number}</h1>
            <button onClick={() => setNumber(number+1)}>INCREASE</button>
            <button onClick={() => setNumber(number-1)}>DECREASE</button>
        </div>
    );
};

export default Counter;