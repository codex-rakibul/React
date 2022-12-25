import React, {useState} from 'react';
import New_Todo from './New_Todo';
import Todos from './Todos';
const dummyTodos = ["todo1", "todo2", "todo3", "todo4"];

const Todo_App = () => {
    const [todos, setTodos] = useState(dummyTodos);

    const onSetNewTodos = (newTodo) =>{
        setTodos([...todos, newTodo]);
    };
    
    return (
        <div>
            <New_Todo onSetNewTodos={onSetNewTodos}/>
            <Todos todos={todos}/>
        </div>
    );
};

export default Todo_App;