import React from 'react';

const ShowData = (props) => {
    
  const {name, email, password} = props.user;
  // let txt =` Your Data : \n `;
  // for(let x in user) {
  //   txt += ` ${x} : ${user[x]} \n`;
  //}
    return (
        <div>
              <p>Name : {name}</p>
              <p>Email : {email}</p>
              <p>Password : {password}</p>
        </div>
    );
};

export default ShowData;