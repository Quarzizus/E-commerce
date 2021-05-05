import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "../containers/styles/Checkout.css";

const Checkout = () => {
  const { removeToCart, state, index } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeToCart(product);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <section className="Checkout">
      <section className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((product) => {
          return (
            <article className="Checkout-item" key={product.id}>
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>{`$ ${product.price}`}</span>
              </div>
              <button type="button" onClick={handleRemove(product)}>
                <i className="fas fa-trash" />
              </button>
            </article>
          );
        })}
      </section>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/info">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Checkout;
