import React, { useContext, useState, useEffect } from "react";
import MapViewer from "../components/MapViewer";
import AppContext from "../context/AppContext";
import "../containers/styles/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra :3`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <section className="Success-map">
          <MapViewer />
        </section>
      </div>
    </div>
  );
};

export default Success;
