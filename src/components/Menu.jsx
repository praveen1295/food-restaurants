import React from "react";
import { useContext } from "react";
import userContext from "../Features/userContext";
import Card from "./Card";

const Menu = () => {
  const { dataList, setDataList } = useContext(userContext);

  const handleSearch = (e) => {
    let text = e.target.value;
    const filterData = dataList.filterData.filter((item, index) => {
      return item.name.toUpperCase().includes(text.toUpperCase());
    });

    setDataList({ ...dataList, data: filterData });
  };
  return (
    <div className="container">
      <div
        className="input-group float-left my-4 mx-2"
        style={{ width: "22rem" }}
      >
        <span className="input-group-text">Filter By Name:</span>
        <input
          type="text"
          placeholder="Enter Foods Name"
          aria-label="First name"
          className="form-control"
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div className="d-flex justify-content-center gap-4 flex-wrap my-4">
        {dataList.data.map((item, idx) => {
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
