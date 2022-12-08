import React,{useState} from 'react';

const Index2 = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count+1);
    };

    return (
        <div>
            <h1 style={{backgroundColor:'darkRed' ,textAlign:'center', color:'white'}}>useState</h1>
            <h2>Count : {count}</h2>
            <button onClick={Increment}>Increment</button>
        </div>
    );
};

export default Index2;