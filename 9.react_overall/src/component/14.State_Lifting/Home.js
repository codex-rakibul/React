import React, { useState } from 'react';
import Child from './Child';
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ["Todo1", "Todo2", "Todo3", "Todo4"];

const Home = () => {
    
    const [todos, setTodos] = useState(dummyTodos);

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <NewTodo onTodo={handleNewTodo} />
            <Todos todos={todos}/>
            <Child/>
        </div>
    );
};

export default Home;