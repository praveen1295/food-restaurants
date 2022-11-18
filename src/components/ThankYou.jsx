import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="my-4">
      <h1>Thank You for Shopping</h1>
      <Link
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

export default Thankyou;
