import React, { useState, useCallback} from 'react';
import B from './B';

const A = () => {
    const [count,setCount]=useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };
    const handleDecrement = () => {
        setCount(count-1);
    };
    return (
        <div>
            <h1>Component A</h1>
            <h3>Count:{count}</h3>
            <B handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </div>
    );
};

export default A;