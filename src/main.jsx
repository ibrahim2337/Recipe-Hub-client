/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider } from "react-router-dom";
import App from './App';
import Error from './components/Error/Error';
import Homepage from './Homepage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Homepage />,
      },
      {
        path:"/home",
        element:<Homepage />,
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/register",
        element:<Register />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
