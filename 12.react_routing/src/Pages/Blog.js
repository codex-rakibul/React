import React,{useState, useEffect} from 'react';
import {  useLocation } from 'react-router-dom';
import { blogsData } from '../data';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {title,body} = location.state;
    console.log(location);
    // const [bodyData, setBodyData] = useState("");
    // const {title} = useParams();

    // useEffect(() => {
    //     const blogdata = blogsData.filter((blog)=>blog.title === title);
    //     setBodyData(blogdata[0].body);
    // },[bodyData])
    return (
        <div>
            <h1>{title}</h1>
            <p>{body.slice(0,20)}</p>
            <p>{body.slice(21,500)}</p>
            <button onClick={()=>{navigate("/blogs")}} style={{height:"30px",backgroundColor:"black",color:"white"}}> back</button>
        </div>
    );
};

export default Blog;