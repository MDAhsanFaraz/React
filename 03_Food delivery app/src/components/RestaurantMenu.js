import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurants = useRestaurant(resId);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurants?.info?.name}</h2>
        <img src={IMG_CDN_URL + restaurants?.info?.cloudinaryImageId} />
        <h3>{restaurants?.info?.avgRatingString}Stars</h3>
        <h3>{restaurants?.info?.costForTwo}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurants.menu.map((innerarray) => {
            return innerarray.itemCards.map((item) => {
              return <li key={item.card.info.id}>{item.card.info.name}</li>;
            });
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
