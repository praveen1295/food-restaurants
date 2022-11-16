import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../Features/userContext";

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch, flag, setFlag, currentUser, setCurrentUser } =
    useContext(userContext);
  console.log(state);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    const cUser = state.USER.map((user, index) => {
      if (user.email === loginData.email) {
        setCurrentUser({ ...user });
      }
      return user;
    });
    // e.preventDefault();
    // console.log(loginData);
    const auth = state.USER.some((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });
    if (!auth) {
      alert("Please enter valid credentials");
      return;
    }
    setFlag({ ...flag, login: true, cart: true });
    navigate("/welcome");
  };

  return (
    <div className="container my-4" style={{ width: "50%" }}>
      {/* {console.log("New currentUser", currentUser)} */}
      <h1>Log In</h1>
      <div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
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
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Log in
        </button>
      </div>
      <Link
        style={{ float: "right", color: "blue", textDecoration: "none" }}
        to="/signup"
      >
        Create New Account
      </Link>
    </div>
  );
};

export default Login;
