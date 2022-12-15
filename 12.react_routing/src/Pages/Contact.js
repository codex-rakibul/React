import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem nisi tenetur 
            officiis magni consequuntur id saepe, unde
            error odio laudantium voluptas laborum ad 
            corrupti dolorem, rerum quam molestiae officia.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem nisi tenetur 
            officiis magni consequuntur id saepe, unde
            error odio laudantium voluptas laborum ad 
            corrupti dolorem, rerum quam molestiae officia.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem nisi tenetur 
            officiis magni consequuntur id saepe, unde
            error odio laudantium voluptas laborum ad 
            corrupti dolorem, rerum quam molestiae officia.
            </p>
            <button onClick={()=>{navigate("/")}} style={{height:"30px",backgroundColor:"black",color:"white"}}> Go to home page</button>
        </div>
    );
};

export default Contact;