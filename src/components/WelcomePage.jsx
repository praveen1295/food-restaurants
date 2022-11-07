import React, { useContext } from "react";
import userContext from "../features/userContext/UserContext";

const WelcomePage = () => {
  const { state, dispatch } = useContext(userContext);
  const handleClick = () => {
    dispatch({ type: "GoTOMemu", payload: "" });
  };
  return (
    <div>
      <h1> H! {state.userName}</h1>
      <h2>Welcome to Food's Restaurant</h2>
      <button className="btn btn-primary" onClick={handleClick}>
        GO TO MENU
      </button>
    </div>
  );
};

export default WelcomePage;
