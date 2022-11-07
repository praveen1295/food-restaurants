import React, { useContext } from "react";
import userContext from "../features/userContext/UserContext";
const data = require("./API.json");

const Menu = () => {
  console.log("api", data);
  const { state, dispatch } = useContext(userContext);

  return (
    <div className="container d-flex flex-wrap gap-4 justify-content-center">
      {data.map((item, idx) => {
        return (
          <div key={idx} className="card" style={{ width: "16rem" }}>
            <img
              src={require(`../assets/${item.image}`)}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price: {item.price}</li>
            </ul>
            <div className="card-body">
              <button
                className="card-link btn btn-danger"
                onClick={() =>
                  dispatch({
                    type: "removeFromCart",
                    payload: item.name,
                  })
                }
              >
                -
              </button>

              <button
                className="card-link btn btn-primary"
                onClick={() =>
                  dispatch({
                    type: "addToCart",
                    payload: {
                      itemName: item.name,
                      itemPrice: item.price,
                      index: idx,
                    },
                  })
                }
              >
                +
              </button>
            </div>
            {console.log("cartData", state.cartData)}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
