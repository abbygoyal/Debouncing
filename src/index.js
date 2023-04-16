import React from "react";
import ReactDOM from "react-dom";
import WithoutDebouncingClass from "./components/WithoutDebouncingClass";
import WithDebouncingClass from "./components/WithDebouncingClass";
import WithoutDebouncingHooks from "./components/WithoutDebouncingHooks";
import WithDebouncingHooks from "./components/WithDebouncingHooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WithDebouncingHooks />
  </React.StrictMode>
);
