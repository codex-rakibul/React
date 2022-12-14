import React,{useState} from 'react';

const Toggle = () => {

    const [Toggle,setToggle] = useState(true);

    const toggleChange = (e) =>{
        setToggle(!Toggle);
    

    }
    const render = (
        <div style={{textAlign:"center",margin:"1rem", backgroundColor:"tomato", padding:"1rem"}}>
            {Toggle && (<p style={{color:"white"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Odit delectus assumenda minus ea distinctio nihil 
                aut ullam earum, impedit repellendus fuga quia perferendis 
                voluptatem quaerat nesciunt commodi accusamus corporis animi.
            </p>)}
            <div>
            <button style={{width:"80px",height:"30px",margin:"1rem 0"}}
            onClick={toggleChange}>{Toggle?"Hide":"Show"}</button>
            </div>
        </div>
    );

    return (
        <div>
            {render}
        </div>
    );
};

export default Toggle;