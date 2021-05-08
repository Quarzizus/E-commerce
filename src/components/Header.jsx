import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className="Header">
      <Link to="/">
        <h1 className="Header_title">PlatziConf Merch</h1>
      </Link>
      <button className="Header_checkout" type="button">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </button>
      {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
    </header>
  );
};

export default Header;
