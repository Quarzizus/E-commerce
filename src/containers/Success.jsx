import React from "react";
import "../containers/styles/Success.css";

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra men</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <section className="Success-map">Google Maps</section>
      </div>
    </div>
  );
};

export default Success;
