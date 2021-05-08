import React, { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address?=${address}&key=AIzaSyA1IkMAoPzPcjVOHQNvN3oTotp2mc3GLQw`;

  useEffect(async () => {
    const response = await axios.get(API);
    setMap(response.data);
  }, []);
};

export default useGoogleAddress;
