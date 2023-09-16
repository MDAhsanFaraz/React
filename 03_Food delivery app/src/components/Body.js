import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper.js";
import useOnline from "../../utils/useOnline.js";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const offline = useOnline();
  if (!offline) {
    return <h1>🍎Offline,please check your internet connection</h1>;
  }
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5 shadow-lg">
        <input
          type="text"
          className="focus:bg-gray-300"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-300 rounded-3xl text-black   hover:bg-pink-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap bg-pink-100">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
