import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const Sname = ['Rakibul','Habib', 'Musfiq', 'Robin', 'Bishal', 'Shohan'];
  
  const products = [
    {name:'Photoshop', price:'$90.12'},
    {name:'Illustrator', price:'$60.56'},
    {name:'PDF Reader', price:'$6.78'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      </header>
    </div>
  );
}

// function Counter(){
//   const [count, setCount] = useState(0);
//   const handleIncrease = () => {
//     const newCount = count + 1;
//     setCount(newCount);
//   }
//   const handleDecrease = () => {
//     setCount(count - 1);
//   }
//   return (
//     <div style={{border:'2px solid red', width:'400px', margin:'5px'}}>
//       <p>useState use</p>
//       <p>Count: {count}</p>
//       <button style={{margin:'10px'}} onClick={handleIncrease}>Increase</button>
//       <button style={{margin:'10px'}} onClick={handleDecrease}>Decrease</button>
//     </div>

//   );
// }

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h1>Data load to Server</h1>
      <p>Users : {users.length}</p>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.website}</li>)
        }
      </ul>
    </div>
  );
}


export default App;
