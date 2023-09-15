import { useState } from "react";
import images from "../assets/images.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

// SPA single page application
// client side routing server side routing
const Title = () => (
  <a href="/">{<img className="logo" alt="logo" src={images} />}</a>
);
const Header = () => {
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      {<Title />}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      {isLoggenIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
