import React from "react";
import style from "./todos.module.css"
import Todo from "./Todo";

const Todos = ({ todos,onRemoveTodo }) => {
  
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo.newTodo} id={todo.id} onRemoveTodo={onRemoveTodo}/>
      ))}
    </section>
  );
};

export default Todos;
