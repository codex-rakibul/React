import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';


const Home = () => {
    const [todos, setTodos] =useState([]);
    const onSetNewTodo = (newTodo) => {
        setTodos((oldTodo) => {
            return [...oldTodo,{id:uuidv4(),newTodo}];
        });
    };
    const handleRemoveTodo = (todoId) => {
        const filteredTodos = todos.filter((todo) => todo.id !== todoId)
        setTodos(filteredTodos);
    };
    return (
        <div className={style.container}>
            <NewTodo onSetNewTodo={onSetNewTodo}/>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    );
};

export default Home;