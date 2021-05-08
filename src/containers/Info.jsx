import React, { useContext, useRef } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "../containers/styles/Info.css";

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
      apto: formData.get("apto"),
      city: formData.get("city"),
      country: formData.get("county"),
      state: formData.get("state"),
      cp: formData.get("cp"),
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
          <div className="Info-next" type="button">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
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
