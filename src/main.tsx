import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/layout/Layout";

import "./index.css";

const queryClient = new QueryClient()


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
