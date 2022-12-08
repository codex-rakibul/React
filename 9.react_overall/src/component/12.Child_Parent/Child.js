import React from 'react';

const Child = (props) => {
    const data = "I am from child component";
    props.onChildData(data);
    console.log(props.data);
    return (
        <div>
            <p>I'm Child Component</p>
            <p>{props.data}</p>
        </div>
    );
};

export default Child;