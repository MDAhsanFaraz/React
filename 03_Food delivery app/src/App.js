/**
 * Header
 *  -Logo(Title)
 *  -Nav Bar(Right Side)
 * Body
 *  -Search Bar
 *  -RestrauntList
 *    -RestrauntCard (many cards)
 *      -Image
 *      -Name
 *      -Rating
 *      -Cusines
 * Footer
 *  -links
 *  -Copyright
 */
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "../utils/UserContext.js";

const Instamart = lazy(() => import("./components/Instamart.js"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Md Ahsan Faraz",
    email: "support@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // parentpath/{path}=>  localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
