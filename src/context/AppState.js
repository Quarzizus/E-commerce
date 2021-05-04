import React, { useState } from "react";
import AppContext from "./AppContext";
import initialState from "../initialState";

const AppState = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  return (
    <AppContext.Provider
      value={{
        addToCart,
        removeToCart,
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
