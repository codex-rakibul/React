import React from 'react';

const C = ({handleIncrement}) => {
    
    return (
        <div>
            <h1>Component C</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default C;