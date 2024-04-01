import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import LayOut from "./LayOut";
import Favourite from "./pages/Favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
