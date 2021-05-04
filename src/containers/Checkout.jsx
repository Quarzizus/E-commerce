import React from "react";
import { Link } from "react-router-dom";
import "../containers/styles/Checkout.css";

const Checkout = () => {
  return (
    <section className="Checkout">
      <section className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        <article className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash" />
          </button>
        </article>
      </section>
      <div className="Checkout-sidebar">
        <h3>Precio total: $10</h3>
        <Link to="/checkout/info">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
