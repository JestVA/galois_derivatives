import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/layout/Layout";

import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
