import React from "react";
import { useContext } from "react";
import userContext from "../Features/userContext";

const Card = ({ item, idx }) => {
  const { state, dispatch, currentUser } = useContext(userContext);
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img src={item.image} className="card-img-top" alt="..." />
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
              payload: { itemName: item.item, currentUser: currentUser },
            })
          }
        >
          -
        </button>

        <button
          className="card-link btn color-light"
          style={{ backgroundColor: "#3d23e5", color: "white" }}
          onClick={() =>
            dispatch({
              type: "addToCart",
              payload: {
                itemName: item.name,
                itemPrice: item.price,
                index: idx,
                currentUser: currentUser,
              },
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
