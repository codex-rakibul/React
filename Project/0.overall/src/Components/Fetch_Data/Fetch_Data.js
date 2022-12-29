import React,{useState} from 'react';
import useFetch from '../CustomHook/useFetch';


const Fetch_Data = () => {
    const {data,isLoading,error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [toggle, setToggle] = useState(false);

    const loadingMsg =(<p>Data is loading</p>);
    const errorMsg = (<p>{error}</p>);
    const renderTodo =(
        data && data.map((todo) => {
            return (<p key={todo.id}> {todo.title}</p>);})
    );
    const button =(
        <button onClick={()=>{setToggle(!toggle)}}>
            {
                toggle ? "hide data":"See All Title for fetch data"
            }
        </button>
    );

    return (
        <div>
            <h1>Todos Fetch Data</h1>
            {
                error && errorMsg
            }
            {
                isLoading && <p style={{color:"red"}}>{loadingMsg}</p>
            }
            {
                button
            }
            {
                toggle && renderTodo
            }
            
        </div>
    );
};

export default Fetch_Data;