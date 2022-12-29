import React,{useState} from 'react';
//use custom hooks
import useFetch from '../CustomHook/useFetch';
//css
import style from './hook.module.css';

//url
const posts = "https://jsonplaceholder.typicode.com/posts";
const comments = "https://jsonplaceholder.typicode.com/comments";
const todos = "https://jsonplaceholder.typicode.com/todos";

const Pro_Custom_Hook = () => {
    const [url,setUrl] = useState("");
    //url pass to custom hook(useFetch)
    const {data,isLoading,error} = useFetch(url);
    const [toggle, setToggle] = useState(false);
    const loadingMsg =(<p>Data is loading</p>);
    const errorMsg = (<p>{error}</p>);

    // Set the data toggle
    const [post,setPost] = useState(false);
    const [comment,setComment] = useState(false);
    const [todo,setTodo] = useState(false);


    // mapping for Post
    const renderPost =(
        data && data.map((post) => {
            const {id, title, body} = post;
            return (<div className={style.card} key={id}>
                <p className={style.title}>{title}</p>
                <p className={style.body}> {body}</p>
                </div>
            );
        })
    );

    //mapping for Comment
    const renderComment =(
        data && data.map((comment) => {
            const{id, email,body} = comment;
            return(<div className={style.card} key={id}>
                <p className={style.title}>{email}</p>
                <p className={style.body}> {body}</p>
                </div>
            );
        })
    );

    //mapping for Todo
    const renderTodo =(
        data && data.map((todo) => {
            const {id, title} = todo;
            return (<div className={style.card} key={id}>
                <p className={style.title}>{id}</p>
                <p className={style.body}> {title}</p>
                </div>
            );
        })
    );
   

    //button action 
    const handlePostUrl =() => { 
        setComment(false);
        setTodo(false);
        setPost(!post); 
        setUrl(posts);
    };
    const handleCommentUrl = () => {
        setPost(false);
        setTodo(false);
        setComment(!comment);
        setUrl(comments);
    };
    const handleTodoUrl = () => {
        setComment(false);
        setPost(false);
        setTodo(!todo);
        setUrl(todos);
    };
    

    return (
       <div style={{height:"auto"}}>
            <h1>FetchData form jsonplaceholde</h1>
            {error && errorMsg}
            <div style={{display:"flex",justifyContent:"space-between", margin:"2rem"}}>   
                <div>
                    <h2>Posts</h2>
                    <button className={style.btn} onClick={()=>{handlePostUrl()}} style={{backgroundColor:post?"red":"teal"}}>{post?"Hide Post":"See Post"}</button>
                </div>
                <div>
                    <h2>Comments</h2>
                    <button className={style.btn} onClick={()=>{handleCommentUrl()}} style={{backgroundColor:comment?"red":"teal"}}>{comment?"Hide Comment":"See Comment"}</button>
                </div>
                <div>
                    <h2>Todos</h2>
                    <button className={style.btn} onClick={()=>{handleTodoUrl()}} style={{backgroundColor:todo?"red":"teal"}}>{todo?"Hide Todo":"See Todo"}</button>
                </div>  
            </div>
            <div style={{backgroundColor:"black", margin:"2rem",padding:"1rem"}}>
                <h1 style={{color:"white"}}>{(post && "Post") || (comment && "Comment") || (todo && "Todos")}</h1>
                
                <p style={{color:"white"}}>{(post && posts) || (comment && comment) || (todo && todos)}</p>
                {post && renderPost}
                {comment && renderComment}
                {todo && renderTodo}     
            </div>
       </div>
    );
};

export default Pro_Custom_Hook;