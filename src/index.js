import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import appRouter from "./App";
import { RouterProvider } from "react-router-dom"; // component
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
