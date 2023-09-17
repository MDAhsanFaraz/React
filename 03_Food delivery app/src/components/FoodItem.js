import { IMG_CDN_URL } from "../constants.js";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-purple-200">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          imageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees-{price / 100}</h4>
    </div>
  );
};
export default FoodItem;
