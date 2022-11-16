import React, { useContext } from "react";
import userContext from "../Features/userContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const { state, dispatch, flag, setFlag } = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>

          <ul className="mb-2 mb-lg-0" style={{ cursor: "pointer" }}>
            {!flag.login ? (
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link mx-2" to={"/"}>
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to={"/signup"}>
                    sign up
                  </Link>
                </li>
              </div>
            ) : (
              <div className="d-flex">
                <Cart />
                <li className="nav-item">
                  <Link
                    className="nav-link mx-2"
                    to={"/"}
                    onClick={(e) => {
                      setFlag({ ...flag, login: false, cart: false });
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
