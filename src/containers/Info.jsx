import React, { useContext, useRef } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "./styles/Info.scss";

const Info = ({ history }) => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
    addToBuyer(buyer);
    history.push("/checkout/payment");
  };

  return (
    <section className="Info">
      <section className="Info-content">
        <div className="Info-head">
          <h2>Info de contacto</h2>
        </div>
        <div className="Info-form">
          <form ref={form}>
            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Correo eletronico"
              name="email"
              autoComplete="off"
            />
            <input
              type="tel"
              placeholder="Telefono"
              name="phone"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="Info-buttons">
          <Link to="/checkout" className="Info-buttons-link">
            <button className="Info-back" type="button">
              Regresar
            </button>
          </Link>
          <button type="button" className="Button-pagar" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </section>
      <article className="Info-sidebar">
        <h3>Pedido</h3>
        {cart.map((product, index) => (
          <div className="Info-item" key={index}>
            <div className="Info-element">
              <h4>{product.title}</h4>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Info;
