import React from 'react';
import PropsTypes from 'prop-types';
const User = (props) => {
    return (
        <div>
            <h3>{props.user.name}</h3>
            <p>{props.user.id}</p>
        </div>
    );
};

User.propsTypes ={
    //key-value
    // userName: PropsTypes.string,
    // userId: PropsTypes.number
    user: PropsTypes.shape({
        id: PropsTypes.number,
        name: PropsTypes.string,
    }),

};

// User.defaultProps ={
//     userName:"default name",
//     userId: 0,
// };
export default User;