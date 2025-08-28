import "lenis/dist/lenis.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Defer importing web vitals to avoid main bundle cost
let reportWebVitals;
import("./reportWebVitals").then((mod) => {
  reportWebVitals = mod.default;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Call after main work is done
setTimeout(() => {
  if (typeof reportWebVitals === "function") {
    reportWebVitals();
  }
}, 0);
