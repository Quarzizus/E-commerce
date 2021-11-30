import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppState from "../context/AppState";

const history = createBrowserHistory();

const ProviderMock = ({ children }) => {
  return (
    <AppState>
      <BrowserRouter>{children}</BrowserRouter>
    </AppState>
  );
};

export default ProviderMock;
