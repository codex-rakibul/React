import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);
    console.log(blogs);
    const truncateString = (str,num)=>{
        if(str.length > num){
            return str.slice(0,num) + "...";
        }else{
            return str;
        }
    }
    
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {
                    blogs.map((blog)=>{
                        const {id, title, body} = blog;
                        return <article key={id}>
                            <h2 style={{color:"teal"}}>{title}</h2>
                            <p>{truncateString(body, 100)}</p>
                            <Link to={title} state={blog}>Learn More</Link>
                        </article>
                    })

                }
            </section>
        </div>
    );
};

export default Blogs;