import React, {useState} from 'react';
import style from './newtodo.module.css';
const NewTodo = ({onSetNewTodo}) => {
    const [todo, setTodo] = useState({title:"", desc:""});
    const {title, desc} = todo;

    const handleChange = (event) =>{
        const name = event.target.name;

        setTodo((oldTodo)=>{
            return {...oldTodo, [name]: event.target.value}
        })
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        onSetNewTodo(todo);
        
    };
    return <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title: </label>
            <input 
                type="text"
                id='title' 
                name='title'
                onChange={handleChange}/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="title">Desc: </label>
            <input 
                type="text"
                id='desc' 
                name='desc'
                onChange={handleChange}/>
        </div>
        <button className={style["form-button"]}>Add New Todo</button>
    </form>;
};

export default NewTodo;