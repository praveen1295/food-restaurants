import React, { useState, useContext } from "react";
import userContext from "../Features/userContext";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cartData: [],
  });
  const { state, dispatch } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.password !== userData.confirmPassword ||
      userData.name === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      alert("Please enter valid credentials");
      return;
    }

    const auth = state.USER.some((user) => {
      return user.email === userData.email;
    });

    if (auth) {
      alert("User of this Email Already Exist");
      return;
    }
    alert("successful sign up");

    dispatch({ type: "userData", payload: userData });
    setUserData({
      ...userData,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="container my-4" style={{ width: "50%" }}>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              aria-label="First name"
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={userData.confirmPassword}
              onChange={(e) => {
                setUserData({ ...userData, confirmPassword: e.target.value });
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
      <Link
        style={{ color: "blue", float: "right", textDecoration: "none" }}
        to="/"
      >
        GO TO LOGIN PAGE
      </Link>
    </div>
  );
};

export default Signup;
