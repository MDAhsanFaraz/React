import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../src/constants";

const useRestaurant = (resId) => {
  const [restaurants, setRestaurants] = useState(null);
  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      /* Live Data */
      const response = await fetch(FETCH_MENU_URL + resId);
      const res_data = await response.json();
      const menuItemsList =
        res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
      const itemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory =
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      const menu = menuItemsList.map((item) => {
        if (item.card.card["@type"] === itemCategory) {
          return item.card.card;
        }
      });
      const modifiedData = {
        info: res_data.data.cards[0].card.card.info,
        menu: menu.filter((value) => value !== undefined),
      };
      setRestaurants(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };
  // return restauran Data
  return restaurants;
};
export default useRestaurant;
