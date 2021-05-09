import { useState, useEffect } from "react";
import axios from "axios";

const usePosition = (address, country) => {
  const [position, setPosition] = useState({});
  useEffect(async () => {
    const response = await axios.get(
      `api.positionstack.com/v1/forward?access_key=89dedfa459dc4702b873d3e28750f597&query=${address} country=${country}`
    );
    setPosition(response.data.data[0]);
  }, []);
  return position;
};

export default usePosition;
