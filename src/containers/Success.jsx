import React, { useContext } from "react";
import "../containers/styles/Success.css";
import AppContext from "../context/AppContext";
import Map from "../components/Map";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra :3`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <section className="Success-map">
          <Map />
        </section>
      </div>
    </div>
  );
};

export default Success;
