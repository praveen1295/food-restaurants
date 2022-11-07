import React, { useContext, useState } from "react";
import { useEffect } from "react";
import userContext from "../features/userContext/UserContext";

const Cart = () => {
  const { state, dispatch } = useContext(userContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const total = () => {
    let tPrice = 0;
    state.cartData.forEach((item) => {
      tPrice += item.count * item.price;
    });
    setTotalPrice(tPrice);
  };

  useEffect(() => {
    total();
  });
  return (
    <div
      className="container"
      style={{
        position: "absolute",
        top: "10%",
        left: "10%",
      }}
    >
      <div
        className="modal fade modal-dialog modal-dialog-centered"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Order Summary
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {state.cartData.map((item, idx) => {
              return (
                <div className="d-flex justify-content-around gap-3 my-2">
                  <span style={{ width: "100px" }}>{item.item}:</span>
                  <span style={{ width: "100px" }}>{item.count}</span>
                  <div style={{ width: "100px" }}>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() =>
                        dispatch({
                          type: "removeFromCart",
                          payload: item.item,
                        })
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch({
                          type: "addToCart",
                          payload: {
                            itemName: item.item,
                            itemPrice: item.price,
                            index: idx,
                          },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
            Total (INR): {totalPrice}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => dispatch({ type: "thankYou", payload: "" })}
              >
                Save and Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      {console.log("total", totalPrice)}
    </div>
  );
};

export default Cart;
