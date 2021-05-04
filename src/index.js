import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import AppState from "./context/AppState";

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById("App")
);
