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
          return (
            <div key={idx}>
              <Card item={item} idx={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
