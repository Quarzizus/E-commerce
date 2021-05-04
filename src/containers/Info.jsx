import React from "react";
import { Link } from "react-router-dom";
import "../containers/styles/Info.css";

const Info = () => {
  return (
    <section className="Info">
      <section className="Info-content">
        <div className="Info-head">
          <h2>Info de contacto</h2>
        </div>
        <div className="Info-form">
          <form>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo eletronico" name="email" />
            <input type="text" placeholder="Dirección" name="adsress" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="tel" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Info-buttons">
          <button className="Info-back" type="button">
            <Link to="/checkout">Regresar</Link>
          </button>
          <button className="Info-next" type="button">
            <Link to="/checkout/payment">Pagar</Link>
          </button>
        </div>
      </section>
      <article className="Info-sidebar">
        <h3>Pedido</h3>
        <div className="Info-item">
          <div className="Info-element">
            <h4>ITEM name</h4>
            <span>$18</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Info;
