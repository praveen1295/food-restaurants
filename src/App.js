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
import Thankyou from "./components/Thankyou";
import About from "./components/About";
import Alert from "./components/Alert";
import Spinner from "./components/Spinner";

function App() {
  const initialState = useContext(userContext);
  const [state, dispatch] = useReducer(userReducer, initialState);

  const [flag, setFlag] = useState({ login: false, cart: false });
  const [dataList, setDataList] = useState({ data: [], filterData: [] });
  const [currentUser, setCurrentUser] = useState({});
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch("API/API.json");
    const data = await response.json();
    setLoading(false);
    setDataList({ ...dataList, data: data, filterData: data });
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
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
        showAlert,
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          {loading && <Spinner />}
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {flag.login && <Route path="/welcome" element={<Welcome />} />}
            <Route path="/menu" element={<Menu />} />
            {flag.cart && <Route path="/cart" element={<Cart />} />}
            <Route path="/thankYou" element={<Thankyou />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
