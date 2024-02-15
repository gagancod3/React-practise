import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  /* useParams - Returns an object of key/value pairs of the dynamic params 
  from the current URL that were matched by the route path.
   */
  console.log(resId);
  //*Custom Hooks 
  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   console.log("called");
  //   const data = await fetch(MENU_API_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  // console.log(resInfo?.cards[0]?.card?.card?.info);
  //*return shimmer in initial render when useState variable is null
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;
  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name
  // );
  const menuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.carousel;
  console.log(menuItems);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <h2>{cuisines.join(",")}</h2>
      <h3>{city}</h3>
      <p>Rating: {avgRating}</p>
      <ul>
        {menuItems.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - Rs.{res.card.info.price ? res.card.info.price/100 : res.card.info.defaultPrice/100}
          </li>
        ))}
        {/* <li>{menuItems[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;