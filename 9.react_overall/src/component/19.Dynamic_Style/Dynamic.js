import React, {useState, useEffect} from 'react';
import style from './dynamic.module.css';

const Dynamic = () => {
    const [password, setpassword] = useState("");
    const [checkInput, setcheckInput] = useState(false);
    const [ error, seterror] = useState("");
    const [btnColor, setbtnColor] = useState(false);

    const pass = "123456";

    const handleChange = (event) => {
        setpassword(event.target.value);
        
    };
    useEffect(()=>{
        try {
            if(password.length < 6){
                setbtnColor(false);
                setcheckInput(true);
                throw "password must be at least 6 characters";
            }else if(password.length >= 6){
                if((password === pass) ){
                    setbtnColor(true);
                    setcheckInput(false);
                }else{
                    setbtnColor(false);
                    setcheckInput(false);
                    throw "password not match";
                }
                setcheckInput(false);
            }
        } catch (error) {
            seterror(error);
        }
    },[password]);

    const handleButton = (event) => {
        alert("Password Match");
    };
    

    const button = (
        <button style={{width:"8rem",height:"2rem",margin:"1rem",backgroundColor: btnColor? "#0F3325":"red",color:"white",cursor:btnColor?"pointer":"not-allowed"}}
        onClick={ btnColor && handleButton}>Login</button>
    );

    const mouse =(
        !checkInput && button
    );

    return (
        <div style={{margin:"5rem", textAlign:"center"}}>
            <p>Password: "123456"</p>
            <input type="password" 
            value={password}
            onChange={handleChange} 
            className={`${btnColor ? style.valid: style.Invalid}`}/>
            <p style={{color:"red"}}>{!btnColor && error}</p>
            {mouse }
        </div>
    );
};

export default Dynamic;