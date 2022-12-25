import React, {useState} from 'react';

const New_Todo = ({onSetNewTodos}) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSetNewTodos(todo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo: </label>
            <input type="text" id='todo' name='todo'
            value={todo} 
            onChange={handleChange} />
            <button>Add New Todo</button>
        </form>
    );
};

export default New_Todo;