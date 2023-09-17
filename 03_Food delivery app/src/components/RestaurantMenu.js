import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
import { addItem } from "../../utils/cardSlice.js";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurants = useRestaurant(resId);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
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

      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {restaurants.menu.map((innerarray) => {
            return innerarray.itemCards.map((item) => {
              return (
                <li key={item.card.info.id}>
                  {item.card.info.name}-
                  <button
                    className="p-1 m-2 bg-purple-500"
                    onClick={() => addFoodItem(item.card.info)}
                  >
                    Add
                  </button>
                </li>
              );
            });
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
