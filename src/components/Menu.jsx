import React from "react";
import { useContext } from "react";
import userContext from "../Features/userContext";
import Card from "./Card";

const Menu = () => {
  const { dataList } = useContext(userContext);
  return (
    <div className="container">
      <div className="d-flex justify-content-between my-4">
        {dataList.map((item, idx) => {
          return <Card kay={idx} item={item} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
