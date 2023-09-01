import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PorterStemmerPlayground from "./PorterStemmerPlayground";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PorterStemmerPlayground />
  </React.StrictMode>
);
