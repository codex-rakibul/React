import React from 'react';
import Child from './Child';

const Child_Parent = () => {
    const data = "I am form parent (Index)";

    const handleChilData = (childData) => {
        return childData;
    }
    return (
        <div>
            <Child data={data} onChildData={handleChilData}/>
            <p></p>
        </div>
    );
};

export default Child_Parent;