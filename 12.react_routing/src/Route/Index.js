import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//-----------import pages-------------
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Team from "../Pages/Team";
import User from "../Pages/User";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";

//--------------Component---------------
import Navbar from "../Component/Navbar";
import Protected from './Protected';


//---------Sweet Alert--------
import swal from 'sweetalert';

const Index = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <div className='btnDiv'>
                {
                    isLoggedIn ? <button className='btn' onClick={()=>{setIsLoggedIn(!isLoggedIn);swal("Safely Logout");}}>Log Out</button>:<button className='btn2' onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log In</button>
                }
                </div>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blogs" element={<Protected isLoggedIn={isLoggedIn}><Blogs/></Protected>}/>
                <Route path="/blogs/:title" element={<Blog/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/user/:userid" element={<User/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Index;