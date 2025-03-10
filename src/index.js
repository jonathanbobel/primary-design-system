import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./w3.css";
//import "./index.css";
import "./scss/index.scss";

//import registerServiceWorker from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// registerServiceWorker();