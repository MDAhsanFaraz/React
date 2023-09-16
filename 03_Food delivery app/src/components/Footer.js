import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="p-10 m-10 text-purple-800 font-bold animate-pulse">
      This is the site developed by {user.name}-{user.email}
    </h4>
  );
};

export default Footer;
