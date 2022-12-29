import React, {memo, useMemo} from 'react';
import C from './C';

const B = ({handleIncrement,handleDecrement}) => {
    

    const allNumber = useMemo(()=>{
        let number = 0;
        for (let i = 0; i <2000000000; i++){
            number++;  
        }
        return number;
    },[]);
    
    return (
        <div>
            <h1>Component B</h1>
            <p>Number:{allNumber}</p>
            <button onClick={handleDecrement}>Decrement</button>
            <C handleIncrement={handleIncrement}/>
        </div>
    );
};

export default B;