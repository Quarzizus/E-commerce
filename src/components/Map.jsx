import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyA1IkMAoPzPcjVOHQNvN3oTotp2mc3GLQw"}>
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={9}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
