import React, { useContext } from "react";
import userContext from "../Features/userContext";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const { state, dispatch, flag, setFlag, currentUser } =
    useContext(userContext);
  return (
    <nav
      className="navbar navbar-expand-lg text-light"
      style={{ backgroundColor: "#3d23e5" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/welcome">
          <img
            src="assets/restaurant_24px.svg"
            className="text-light mx-2"
            alt="..."
            style={{
              filter:
                "invert(65%) sepia(100%) saturate(0%) hue-rotate(246deg) brightness(102%) contrast(143%)",
            }}
          />
          Foods Restaurant
        </Link>
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
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to={flag.login ? "/welcome" : "/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="about">
                About
              </Link>
            </li>
          </ul>

          <ul className="mb-2 mb-lg-0" style={{ cursor: "pointer" }}>
            {!flag.login ? (
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link mx-2" to={"/"}>
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-2" to={"/signup"}>
                    SIGN UP
                  </Link>
                </li>
              </div>
            ) : (
              <div className="d-flex">
                {currentUser.name ? (
                  <li className="nav-item dropdown mx-4">
                    <h2
                      className="nav-link dropdown-toggle"
                      // href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {currentUser.name}
                    </h2>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="nav-link mx-2"
                          to={"/"}
                          onClick={(e) => {
                            setFlag({ ...flag, login: false, cart: false });
                          }}
                        >
                          LOGOUT
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  ""
                )}
                <Cart />
                <li className="nav-item"></li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
