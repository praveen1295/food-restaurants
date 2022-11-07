import React, { useContext, useState } from "react";
import userContext from "../features/userContext/UserContext";

const Signup = () => {
  const { state, dispatch } = useContext(userContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log(state.USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      alert("password and confirm password not matched");
      return;
    }
    dispatch({ type: "userDetail", payload: userData });
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputPassword4"
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputAddress"
            placeholder="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputAddress"
            placeholder="confirm password"
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
