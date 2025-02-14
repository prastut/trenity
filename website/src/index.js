import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./containers/App";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
