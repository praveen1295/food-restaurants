import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../Features/userContext";

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch, currentUser } = useContext(userContext);
  const { index } = currentUser;
  const [totalPrice, setTotalPrice] = useState(0);
  const total = () => {
    let tPrice = 0;
    state.USER[index].cartData.forEach((item) => {
      tPrice += item.count * item.price;
    });
    setTotalPrice(tPrice);
  };

  const cartClick = () => {
    navigate("/thankyou");
  };
  useEffect(() => {
    total();
  });
  return (
    <div className="text-dark">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary position-relative"
        style={{ backgroundColor: "#3d23e5", color: "white" }}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {state.USER[index].cartData.length}
          <span className="visually-hidden">unread messages</span>
        </span>
        <i className="fa-solid fa-cart-shopping"></i>
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
              {state.USER[index].cartData.length ? (
                <>
                  {state.USER[index].cartData.map((item, idx) => {
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
                            style={{
                              backgroundColor: "#3d23e5",
                              color: "white",
                            }}
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
              <button
                onClick={cartClick}
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#3d23e5", color: "white" }}
                data-bs-dismiss="modal"
              >
                Save and Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
