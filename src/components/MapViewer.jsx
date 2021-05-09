import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import IconPosition from "./IconPosition";
import "leaflet/dist/leaflet.css";

const MapViewer = ({ data }) => {
  const center = {
    lat: data.latitude,
    lng: data.longitude,
  };
  return (
    <MapContainer zoom={13} center={center}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={IconPosition} />
    </MapContainer>
  );
};

export default MapViewer;
