import React from "react";
import "../containers/styles/Payment.css";

const Payment = () => {
  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        <button className="Payment-button" type="button">
          Pagar con Paypal
        </button>
      </div>
      <aside />
    </section>
  );
};

export default Payment;
