import React, { useState } from "react";
import style from "../10.FORM/Form.css";

const USE_STATE_WITH_OBJECT = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    alert("Registration Successfully Done!");
    setTimeout(() => {
      ShowData(user);
    }, 2000);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handelSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handelChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handelChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handelChange}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
const ShowData = (props) => {
  let txt = `Your Data :\n`;
  for (let x in props) {
    txt += `${x} : ${props[x]} \n`;
  }
  alert(txt);
};
export default USE_STATE_WITH_OBJECT;
