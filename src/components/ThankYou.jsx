import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="my-4">
      <h1>Thank You for Shopping</h1>
      <Link className="btn btn-primary" to={"/menu"}>
        GO TO MENU
      </Link>
    </div>
  );
};

export default Thankyou;
