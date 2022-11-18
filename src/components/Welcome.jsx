import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../Features/userContext";

const Welcome = () => {
  const { currentUser } = useContext(userContext);
  return (
    <div className="container my-4">
      <h2>Hay! {currentUser.name}</h2>
      <h1>Welcome to Foods Restaurants</h1>
      <Link
        type="submit"
        className="btn btn-primary"
        style={{
          backgroundColor: "#3d23e5",
          color: "white",
        }}
        to={"/menu"}
      >
        GO TO MENU
      </Link>
    </div>
  );
};

export default Welcome;
