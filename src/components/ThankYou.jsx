import React, { useContext } from "react";
import userContext from "../features/userContext/UserContext";

const ThankYou = () => {
  const { state, dispatch } = useContext(userContext);
  return (
    <div className="container">
      <h1>Checkout</h1>
      <p>Thank you for your order</p>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "GoBackToMenu", payload: "" });
        }}
      >
        Go Back to menu
      </button>
    </div>
  );
};

export default ThankYou;
