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
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

// config Driven UI

// const config

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
