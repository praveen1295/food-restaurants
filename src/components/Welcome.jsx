import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to Foods Restaurants</h1>
      <Link type="submit" className="btn btn-primary" to={"/menu"}>
        GO TO MENU
      </Link>
    </div>
  );
};

export default Welcome;
