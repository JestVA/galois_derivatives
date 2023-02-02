import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import "./index.css";
import Root from './pages/Root'
import About from './pages/About'
import Optics from "./pages/Optics";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/optics',
    element: <Optics />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
