import { IMG_CDN_URL } from "../constants.js";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileDistance,
}) => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-purple-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileDistance} stars</h4>
    </div>
  );
};
export default RestaurantCard;
