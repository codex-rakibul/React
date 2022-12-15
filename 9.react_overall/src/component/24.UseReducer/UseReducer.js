import React, {useState, useReducer} from 'react';
import {reducer} from './Reduce';
const booksData = [
    {id: 1, name:"Pather Panchal"},
    {id: 2, name:"Padma Nadir Majhi"},
    {id: 3, name:"Srikanta"},
];
const Modal =({modalText}) => {
   return <p style={{color:"green"}}>{modalText}</p>

};


const UseReducer = () => {
    // const [books, setBooks] = useState(booksData);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [modalText, setModalText] = useState("");

    const [bookState, dispatch] = useReducer(reducer,{
        books: booksData,
        isModalOpen: false,
        modalText: "",
    })

    const [bookName, setBookName] = useState("");
    const [errorText, setErrorText] = useState("");

    const handleChange = (event) => {
        setBookName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if(bookName !== ""){
                const newBook = { id: new Date().getTime().toString(), name:bookName};
                dispatch({type:"ADD", payload: newBook});
                setBookName("");
                setErrorText("");
            }else{
                throw "Enter the book name";
            }
        } catch (error) {
            setErrorText(error);
        }

    };
    const removeBook = (id) =>{
        dispatch({type: "REMOVE", payload:id})
    };

    return (
        <div>
            <h3>book List</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookName">BookName : </label>
                <input type="text" id="bookName" value={bookName} onChange={handleChange}/>
                <button style={{width:"80px", height:"47px"}} type="submit">Add Book</button>
                <p style={{color:"red"}}>{errorText}</p>
            </form>
            {
                bookState.isModalOpen && <Modal modalText={bookState.modalText}/>
            }
            {
                bookState.books.map((book) =>{
                    const {id, name} = book;
                    return <li key={id}>{name}<button onClick={()=>{removeBook(id)}}>Remove</button></li>
                })
            }
        </div>
    );
};

export default UseReducer;