import React from 'react';
import { Navigate } from 'react-router-dom';

//---------Sweet Alert--------
import swal from 'sweetalert';

const Protected = ({isLoggedIn, children}) => {
    if(!isLoggedIn){
        swal("You must be logged in first");
        return <Navigate to="/" replace/>;
    }
    return children;
};

export default Protected;