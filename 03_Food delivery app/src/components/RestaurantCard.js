import { useContext } from "react";
import { IMG_CDN_URL } from "../constants.js";
import UserContext from "../../utils/UserContext.js";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-purple-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5 className="font-bold">
        {user.name}-{user.email}
      </h5>
    </div>
  );
};
export default RestaurantCard;
