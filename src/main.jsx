import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root.jsx";
import HomePage from "./pages/home page/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/courses",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/blog",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/about",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/contact",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
