import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "../components/Markers";
import "leaflet/dist/leaflet.css";

const MapViewer = () => {
  const center = {
    lat: 4.37474,
    lng: -73.373662,
  };
  return (
    <MapContainer center={center} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </MapContainer>
  );
};

export default MapViewer;
