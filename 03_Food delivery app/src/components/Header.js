import { useState } from "react";
import images from "../assets/images.jpeg";
import { Link } from "react-router-dom";

// SPA single page application
// client side routing server side routing
const Title = () => (
  <a href="/">{<img className="logo" alt="logo" src={images} />}</a>
);
const Header = () => {
  const [isLoggenIn, setIsLoggedIn] = useState(false);

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
          <li>Cart</li>
        </ul>
      </div>
      {isLoggenIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
