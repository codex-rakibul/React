import React, { useState } from "react";
import style from "../10.FORM/Form.css";
import { useFormik } from "formik";
import * as yup from "yup";
import ShowData from "./ShowData";

const Signup = () => {
  const [count, setCount] = useState(false);
  const [user, setUser] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have atlest 2 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Name must have atlest 6 characters")
        .required(),
    }),

    onSubmit: (values) => {
      setCount(true);
      const person = values;
      ShowData2(person);
    },
  });

  const renderNameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );
  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && <span>{formik.errors.password}</span>;
  const renderForm = (
    <form action="" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        {renderNameError}
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        {renderEmailError}
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {renderPasswordError}
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
  //console.error(formik.errors);

  const ShowData2 = (person) => {
    const values = person;
    setUser(values);
  };

  return (
    <div>
      <h2 style={{ margin: "10px" }}>User Signup</h2>
      <div>
        {renderForm}
        {count && <ShowData user={user} />}
      </div>
    </div>
  );
};
export default Signup;
