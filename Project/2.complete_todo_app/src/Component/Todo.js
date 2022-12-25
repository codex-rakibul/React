import React from 'react';
import style from './todo.module.css';
import "font-awesome/css/font-awesome.min.css";
const Todo = ({todo,id,onRemoveTodo}) => {
    const {title, desc} = todo;

    const handleRemove = (id) => {
        onRemoveTodo(id);
    };
    return <article className={style.todo}>
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <button onClick={()=>{
            handleRemove(id)
        }} className={style.btn}><i className='fa fa-trash fa-2x'></i></button>
    </article>;
};

export default Todo;