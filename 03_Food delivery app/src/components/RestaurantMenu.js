import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { restaurantMenu } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [Menuitem, setMenuItem] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      /* Live Data */
      const response = await fetch(
        "https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=" +
          resId
      );
      const res_data = await response.json();
      const menuItemsList =
        res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      /* Mock Data */
      //const res_data =  restaurantMenu;

      const menu = menuItemsList.map((item) => {
        if (
          item.card.card["@type"] === itemCategory ||
          item.card.card["@type"] === NestedItemCategory
        ) {
          return item.card.card;
        }
      });

      const modifiedData = {
        info: res_data.data.cards[0].card.card.info,
        menu: menu.filter((value) => value !== undefined),
      };
      console.log(modifiedData);
      const nameOfmenuItem = modifiedData.menu.map((item) => {
        return item.itemCards.map((object) => {
          console.log(object.card.info.name);
          return object.card.info.name;
        });
      });
      console.log("jk");
      setMenuItem(nameOfmenuItem);
      setRestaurants(modifiedData);
    } catch (error) {
      console.log(error);
    }
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
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(Menuitem).map((innerarray) => {
            return innerarray.map((item) => {
              return <li>{item}</li>; // You need to return the li element
            });
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
