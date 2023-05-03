/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/Error";
import Homepage from "./page/Homepage/Homepage";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Blog from "./components/Blog/Blog";
import Details from "./components/Details/Details";
import Features from "./page/Features/Features";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"/blogs",
        element:<Blog />
      },
     {
      path:"/details",
      element:<Details />
     },
     {
      path:"/features",
      element:<Features />
     }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
