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
import Features from "./page/Features/Features";
import DetailsPage from "./page/DetailsPage/DetailsPage";
import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./route/PrivateRoute";
import { Toaster } from "react-hot-toast";



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
                path: "/blog",
                element: <Blog />,
            },

            {
                path: "/chef_detail/:id",
                element: (
                    <PrivateRoute>
                        <DetailsPage />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/recipes/${params.id}`),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <AuthProvider>
            <Toaster position="top-center" />
            <RouterProvider router={router} />
        </AuthProvider>
    </div>
);
