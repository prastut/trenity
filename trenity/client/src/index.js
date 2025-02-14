import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import App from "./scenes/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
