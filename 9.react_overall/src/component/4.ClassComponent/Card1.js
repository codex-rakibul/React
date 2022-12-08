import React from 'react';

const Card1 = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.id}</p>
        </div>
    );
};

export default Card1;