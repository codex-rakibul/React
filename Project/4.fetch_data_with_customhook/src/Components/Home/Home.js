import React,{useState} from 'react';
//use custom hooks
import useFetch from '../CustomHook/useFetch';
//css
import style from './home.module.css';

//url............................................................
const posts = "https://jsonplaceholder.typicode.com/posts";
const comments = "https://jsonplaceholder.typicode.com/comments";
const photos = "https://jsonplaceholder.typicode.com/photos";
const todos = "https://jsonplaceholder.typicode.com/todos";
const users = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
    const [url, setUrl] = useState("");
    //url pass to custom hook(useFetch)
    const {data, isLoading,error} = useFetch(url);
    const [toggle, setToggle] = useState(false);
    const loadingMsg =(<p>Data is loading</p>);
    const errorMsg = (<p>{error}</p>);

    // Set the data toggle
    const [post, setPost] = useState(false);
    const [comment, setComment] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [todo, setTodo] = useState(false);
    const [user, setUser] = useState(false);


    // mapping for Post..................................
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

    //mapping for Comment.................................
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

    //mapping for Photo...................................
    const renderPhoto =(
        data && data.map((photo) => {
            const{id, title, url} = photo;
            return(<div className={style.card} key={id}>
                <p className={style.title}>{title}</p>
                <img src={url} alt="" />
                </div>
            );
        })
    );

    //mapping for Todo....................................
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
    
    //mapping for User....................................
    const renderUser =(
        data && data.map((user) => {
            const {id, name, email, address, phone, website} = user;
            console.log(address);
            return (
                <div className={style.card} key={id}>
                    <p className={style.title}>{name}</p>
                    <p className={style.body}>Email: {email}</p>
                    <p className={style.body}>Phone No: {phone}</p>
                    <p className={style.body}>Website: {website}</p>
                    
                </div>
            );
        })
    );
   

    //button action........................................ 
    const handlePostUrl =() => { 
        setComment(false);
        setPhoto(false);
        setTodo(false);
        setUser(false);
        setPost(!post); 
        setUrl(posts);
    };
    const handleCommentUrl = () => {
        setPost(false);
        setTodo(false);
        setPhoto(false);
        setUser(false);
        setComment(!comment);
        setUrl(comments);
    };
    const handlePhotoUrl = () => {
        setPost(false);
        setTodo(false);
        setComment(false);
        setUser(false);
        setPhoto(!photo);
        setUrl(photos);
    };
    const handleTodoUrl = () => {
        setComment(false);
        setPost(false);
        setPhoto(false);
        setUser(false);
        setTodo(!todo);
        setUrl(todos);
    };
    const handleUserUrl = () => {
        setComment(false);
        setPost(false);
        setPhoto(false);
        setTodo(false);
        setUser(!user);
        setUrl(users);
    };
    

    return (
       <div style={{height:"auto"}}>
            <h1>FetchData With Custom Hook</h1>
            {/* {error && errorMsg} */}
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
                    <h2>Photos</h2>
                    <button className={style.btn} onClick={()=>{handlePhotoUrl()}} style={{backgroundColor:photo?"red":"teal"}}>{photo?"Hide Photo":"See Photo"}</button>
                </div>
                <div>
                    <h2>Todos</h2>
                    <button className={style.btn} onClick={()=>{handleTodoUrl()}} style={{backgroundColor:todo?"red":"teal"}}>{todo?"Hide Todo":"See Todo"}</button>
                </div> 
                <div>
                    <h2>User</h2>
                    <button className={style.btn} onClick={()=>{handleUserUrl()}} style={{backgroundColor:user?"red":"teal"}}>{user?"Hide User":"See User"}</button>
                </div>  
            </div>
            <div style={{backgroundColor:"black", margin:"2rem",padding:"1rem"}}>
                <h1 style={{color:"white"}}>{(post && "Post") || (comment && "Comment") || (photo && "Photos") || (todo && "Todos") || (user && "User")}</h1>
                
                <p style={{color:"white"}}>{(post && posts) || (comment && comments) || (photo && photos) || (todo && todos) || (user && users)}</p>
                {post && renderPost}
                {comment && renderComment}
                {photo && renderPhoto}
                {todo && renderTodo}  
                {user && renderUser}   
            </div>
       </div>
    );
};

export default Home;