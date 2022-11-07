import React, { useContext, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import userContext from "./features/userContext/UserContext";
import userReducer from "./features/reducers/reducer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WelcomePage from "./components/WelcomePage";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import About from "./components/About";

function App() {
  const initialState = useContext(userContext);
  const [state, dispatch] = useReducer(userReducer, initialState);
  console.log(state);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={state.flag.login && <Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Login />} />
          </Routes>
          {state.flag.signup && <Signup />}
          {state.flag.menu && <Menu />}
          {state.flag.WelcomePage && <WelcomePage />}
          {state.flag.cart && <Cart />}
          {state.flag.tku && <ThankYou />}
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
