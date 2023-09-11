import { IMG_CDN_URL } from "../constants.js";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileDistance,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileDistance} stars</h4>
    </div>
  );
};
export default RestaurantCard;
