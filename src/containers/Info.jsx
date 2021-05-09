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
      address: formData.get("address"),
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
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo eletronico" name="email" />
            <input type="tel" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Info-buttons">
          <button className="Info-back" type="button">
            <Link to="/checkout">Regresar</Link>
          </button>
          <button type="button" className="Button-pagar" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </section>
      <article className="Info-sidebar">
        <h3>Pedido</h3>
        {cart.map((product) => {
          return (
            <div className="Info-item" key={product.id}>
              <div className="Info-element">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Info;
