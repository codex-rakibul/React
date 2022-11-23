import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const data = [
    { name: "Rakibul", id: 1, phn: "017000000001" },
    { name: "Islam", id: 2, phn: "018" },
    { name: "Sony", id: 3, phn: "019" },
  ];

  //data load from server
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data load with Array</p>
        {data.map((person, index) => (
          <Person person={person} key={index} />
        ))}
        <p>Data load with Server</p>
        {users.map((user, index) => (
          <Server person={user} key={index} />
        ))}
      </header>
    </div>
  );
}

function Person(props) {
  const { name, id, phn } = props.person;
  return (
    <div style={{ border: "2px solid red", width: "400px", margin: "5px" }}>
      <h3>{name}</h3>
      <p> {id} </p>
      <p>{phn}</p>
    </div>
  );
}


function Server(props) {
  const {id, name , address} = props.person;
  console.dir(address);
  return (
    <div style={{ border: "2px solid red", width: "400px", margin: "5px" }}>
      <h3>{name}</h3>
      <p>{id}</p>
      <p>{"lat: "+address.geo.lat+ " lng: " +address.geo.lng}</p>
    </div>
  );
}

export default App;
