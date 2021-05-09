import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "./styles/Header.scss";

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <header className="Header">
      <Link to="/" className="Link_header-title">
        <h1 className="Header_title">E-PlatziCommerce</h1>
      </Link>
      <div className="Header_container-checkout">
        <button className="Header_checkout" type="button">
          <Link to="/checkout" className="Link_header-buy">
            <i className="fas fa-shopping-basket" />
          </Link>
        </button>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
};

export default Header;
