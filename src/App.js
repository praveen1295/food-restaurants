import React, { useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import userContext from "./Features/userContext";
import userReducer from "./Features/reducers/reducer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
// import Card from "./components/Card";
import Thankyou from "./components/Thankyou";
import About from "./components/About";

function App() {
  const initialState = useContext(userContext);
  const [state, dispatch] = useReducer(userReducer, initialState);

  const [flag, setFlag] = useState({ login: false, cart: false });
  const [dataList, setDataList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const getData = async () => {
    const response = await fetch("API/API.json");
    const data = await response.json();
    setDataList(data);
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(state);
  return (
    <userContext.Provider
      value={{
        state,
        dispatch,
        flag,
        setFlag,
        dataList,
        setDataList,
        currentUser,
        setCurrentUser,
      }}
    >
      <Router>
        <div className="App">
          {console.log("New currentUser", currentUser.id)}
          {console.log("New statelllllll", state.USER)}

          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {flag.login && <Route path="/welcome" element={<Welcome />} />}
            <Route path="/menu" element={<Menu />} />
            {flag.cart && <Route path="/cart" element={<Cart />} />}
            <Route path="/thankYou" element={<Thankyou />} />
          </Routes>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
