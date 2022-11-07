import React, { useContext } from "react";
import userContext from "../features/userContext/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(userContext);
  return (
    <nav
      className="navbar bg-primary text-light sticky-top"
      style={{ marginBottom: "20px" }}
    >
      <div className="container-fluid text-light">
        <div>
          <Link className="navbar-brand text-light" to="">
            Food's Restaurant
          </Link>
          <Link className="navbar-brand text-light" to="/">
            Home
          </Link>
          <Link
            className="navbar-brand text-light"
            onClick={() => {
              dispatch({ type: "about", payload: "" });
            }}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="d-flex">
          {" "}
          {state.flag.logout ? (
            <button
              className="navbar-brand text-light btn btn-primary"
              style={{ curser: "pointer" }}
              onClick={() => {
                dispatch({ type: "logout", payload: "" });
              }}
            >
              Logout
            </button>
          ) : (
            <span
              className="navbar-brand text-light btn btn-primary"
              onClick={() => {
                dispatch({ type: "loginNavbar", payload: "" });
              }}
            >
              Login
            </span>
          )}
          {state.flag.cart && (
            <div onClick={() => dispatch({ type: "cartClick", payload: "" })}>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                cart item: {state.cartData.length}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
