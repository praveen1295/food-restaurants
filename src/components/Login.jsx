import React, { useContext, useState } from "react";
import userContext from "../features/userContext/UserContext";

const Login = () => {
  const { state, dispatch } = useContext(userContext);
  console.log(state);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = state.USER.some((user) => {
      // console.log(action.payload);
      return (
        user.userEmail === loginData.email &&
        user.userPassword === loginData.password
      );
    });
    if (!auth) {
      alert("please enter valid username, password");
      return;
    }
    dispatch({ type: "handleLogin", payload: loginData });
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail4" className="col-sm-2 col-form-label">
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
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2"></div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <span
        onClick={() => dispatch({ type: "handleSignup", payload: false })}
        style={{ marginLeft: "75%", cursor: "pointer" }}
      >
        Create New Account
      </span>
    </div>
  );
};

export default Login;
