import React,{ useState} from 'react';
import User from './User';

const Users = () => {

    // const [userName, setUserName] = useState("Rakibul Islam");
    // const [userId, setUserId] = useState("01319106062");
    const [user, setUser] = useState({
        id:"01319106062",
        name:"Rakibul Islam",

    })

    return (
        <div>
            <User user={user}/>
        </div>
    );
};

export default Users;