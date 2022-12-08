import React,{useState} from 'react';
import style from './Form.css'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelNameChange = (e) => {
        setName(e.target.value);
    };

    const handelEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handelPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    
    const handelSubmit = (e) => {
        const data = [ name, email, password];
        alert("Done!");
        ShowData(data);
        e.preventDefault();   
        
    };
    

    return (
        <div>
           <h1>Registration</h1> 
           <form action="" onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name" onChange={handelNameChange} required />
                </div>
                
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" onChange={handelEmailChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" onChange={handelPasswordChange} required />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
                    
        </div>
    );
};
const ShowData = (props) => {
    console.dir(props);
    
};
export default Form;