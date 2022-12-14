import React,{useState, useEffect} from 'react';
import useFetch from './useFetch';

const CustomFetchData = () => {
    const [toggle, setToggle] = useState(false);
    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");

    const handleToggle = (e) =>{
        setToggle(!toggle);
    }

    const loading = (
        <div style={{textAlign:"center"}}>
            {
                 isLoading? (<p style={{color:"red"}}>Data is Loading</p>): (<p style={{color:"green"}}>Data loading completed </p>)
            }
            </div>
    );

    const renderFetchData = (
        <div>
            <button style={{width:"10rem", height:"3rem",backgroundColor:"teal",border:"none", color:"white"}} onClick={handleToggle}>
                {
                    !toggle?"Show All Title": "Hide All Title"
                }
            </button>
            {
                toggle && (data.map((todo) => {
                    return (
                        <div key={todo.id} className="card">
                            <p>Id : {todo.id}</p>
                            <p>Title : {todo.title}</p>
                            {
                                todo.completed?(<span style={{color:'#00ff80'}}>Work Done</span>):(<span style={{color:"tomato"}}>Completed the Work. . .</span>)
                            }
                        </div>
                    );
                }))
            }
        </div>
    );


    return (
        <div style={{margin:"1rem"}}>
            {loading}
            {
                error && <p>{error}</p>
            }
            <h1>Todos</h1>
            {renderFetchData}
        </div>
    );
};

export default CustomFetchData;