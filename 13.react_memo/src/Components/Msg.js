import React, { memo, useMemo } from 'react';

const Msg = ({handleOffMsg,onHandleIncrementMsg}) => {
    console.log("message rendering...");

    const calculateNumber = useMemo(()=>{
        let number = 0;
        for(let i = 0; i <666666666; i++) {
            number++;
        }
        return number;
    },[]);

    return (
        <div>
            <h1>Number: {calculateNumber}</h1>
            <h2>Send {handleOffMsg} message</h2>
            <button onClick={onHandleIncrementMsg}>Send msg number</button>
        </div>
    );
};

export default memo(Msg);