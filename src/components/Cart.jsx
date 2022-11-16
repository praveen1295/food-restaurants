import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import userContext from "../Features/userContext";

const Cart = () => {
  const { state, dispatch, currentUser } = useContext(userContext);
  const { id } = currentUser;
  const [totalPrice, setTotalPrice] = useState(0);
  const total = () => {
    let tPrice = 0;
    state.USER[id].cartData.forEach((item) => {
      tPrice += item.count * item.price;
    });
    setTotalPrice(tPrice);
  };

  useEffect(() => {
    total();
  });
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        cart item: {state.USER[id].cartData.length}
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
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
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {state.USER[id].cartData.length ? (
                <>
                  {state.USER[id].cartData.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="d-flex justify-content-around gap-3 my-2"
                      >
                        <span style={{ width: "100px" }}>{item.item}:</span>
                        <span style={{ width: "100px" }}>{item.count}</span>
                        <div style={{ width: "100px" }}>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() =>
                              dispatch({
                                type: "removeFromCart",
                                payload: {
                                  itemName: item.item,
                                  currentUser: currentUser,
                                },
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
                  })}
                  Total (INR): {totalPrice}
                </>
              ) : (
                "Cart Is Empty"
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link
                type="button"
                className="btn btn-primary"
                to={"/thankYou"}
                // data-bs-dismiss="modal"
              >
                Save and Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
