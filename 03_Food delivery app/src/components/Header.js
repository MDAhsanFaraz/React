import { useState, useContext } from "react";
import images from "../assets/images.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../../utils/store";

const Title = () => (
  <a href="/">{<img className="h-28 pl-2" alt="logo" src={images} />}</a>
);
const Header = () => {
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between  bg-pink-100 shadow-xl">
      {<Title />}
      <div className="nav-items">
        <ul className="flex py-12 px-2">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>

          <li className="px-2">
            <Link to="/cart">Cart-{cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <h1 className="p-10 font-bold text-red-500 ">{user.name}</h1>
      {isLoggenIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
