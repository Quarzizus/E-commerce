import IconPosition from "./IconPosition";
import React, { useState } from "react";
import { Marker, useMapEvents, Popup } from "react-leaflet";

const Markers = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={IconPosition}>
      <Popup>Espera aquí paciente :3</Popup>
    </Marker>
  );
};

export default Markers;
