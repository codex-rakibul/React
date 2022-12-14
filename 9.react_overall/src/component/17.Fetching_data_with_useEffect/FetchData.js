import React,{useState, useEffect} from 'react';
const FetchData = () => {
    const [todos, setTodos] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            if(!response){
                throw Error("Fecthing is not successful")
            }else{
                return response.json()
            }
        })
        .then((data)=>{
            setTodos(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        });
    },[]);

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
                toggle && (todos.map((todo) => {
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

export default FetchData;