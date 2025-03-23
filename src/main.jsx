import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root.jsx";
import HomePage from "./pages/home page/HomePage.jsx";
import CoursesPage from "./pages/courses page/CoursesPage.jsx";
import BlogPage from "./pages/blog page/BlogPage.jsx";
import AboutUsPage from "./pages/about us page/AboutUsPage.jsx";
import ContactUsPage from "./pages/contact us page/ContactUsPage.jsx";
import CartPage from "./pages/cart page/CartPage.jsx";
import LoginPage from "./pages/login page/LoginPage.jsx";
import SignUpPage from "./pages/sign up page/SignUpPage.jsx";
import CategoriesPage from "./pages/categorie page/CategoriesPage.jsx";
import CategoriesDetails from "./pages/categorie page/categories components/CategoriesDetails.jsx";


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
        element: <CoursesPage/>,
      },
      {
        path: "/blog",
        element: <BlogPage/>,
      },
      {
        path: "/about",
        element: <AboutUsPage/>,
      },
      {
        path: "/contact",
        element: <ContactUsPage/>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/signup",
        element: <SignUpPage/>,
      },
      {
        path: "/categories/:id",
        element: <CategoriesDetails/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
