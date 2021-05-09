import React, { useContext } from "react";
import MapViewer from "../components/MapViewer";
import AppContext from "../context/AppContext";
import usePosition from "../hooks/usePosition";
import "../containers/styles/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = usePosition(buyer[0].address, buyer[0].country);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra :3`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <section className="Success-map">
          <MapViewer data={location} />
        </section>
      </div>
    </div>
  );
};

export default Success;
