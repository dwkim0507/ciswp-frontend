import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import './font/Inter-Regular.ttf';
import './font/Inter-Light.ttf';
import './font/Inter-SemiBold.ttf';
import './font/Jost-Regular.ttf';
import './font/Jost-SemiBold.ttf';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap-icons/font/bootstrap-icons.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);