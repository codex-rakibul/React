import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos =[
        {
            id: uuidv4(),
            "title": "Title 1",
            "desc": "lorem ipsum dolor sit amet, consectetur adip"
        },
        {
            id: uuidv4(),
            "title": "Title 2",
            "desc": "lorem ipsum dolor sit amet, consectetur adip"
        },
        {
            id: uuidv4(),
            "title": "Title 3",
            "desc": "lorem ipsum dolor sit amet, consectetur adip"
        },
        {
            id: uuidv4(),
            "title": "Title 4",
            "desc": "lorem ipsum dolor sit amet, consectetur adip"
        },
        {
            id: uuidv4(),
            "title": "Title 5",
            "desc": "lorem ipsum dolor sit amet, consectetur adip"
        },
        {
            id: uuidv4(),
            "title": "Title 6",
            "desc": "lorem ipsum dolor sit amet, consectetur adip"
        }
];

const List = () => {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id} className='card' >
                            <h3 className='cardTitle'>{todo.title}</h3>
                            <p className='cardDesc'>{todo.desc}</p>
                            <p>Unique id : {todo.id}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default List;