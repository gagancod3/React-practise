import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"; 

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  /* useParams - Returns an object of key/value pairs of the dynamic params 
  from the current URL that were matched by the route path.
   */
  // console.log(resId);
  //*Custom Hooks 
  const resInfo = useRestaurantMenu(resId);
  // console.log('RES INFO   ',resInfo);
  const [showIndex,setShowIndex] = useState(null);

  const dummy = "Dummy data";

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  console.log('INI   ',resInfo);

  // console.log('NAME   ',resInfo?.cards[2]?.card?.card?.info);
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
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name);
  const menuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.carousel;
  // console.log('MENU ITEMS   ',menuItems);
  // console.log('upper layer  ',resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR);  
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards?.filter(
    (c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log('CAT  ',categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-xl">{name}</h1>
      <h2>Menu</h2>
      <h2 className=" font-bold text-md">{cuisines.join(",")}</h2>
      {/* categories accordions */}
      {categories.map((category,index) => 
      // controlled component
      <RestaurantCategory 
      key={category?.card?.card?.title} 
      data={category?.card?.card}
      //*Using a callback function for setting the state variable value
      setShowIndex={() => {
        console.log('INDEX  ',index); 
        return setShowIndex(index)}}
      showItems = {index == showIndex ? true : false} 
      dummy = {dummy}
      /> )}
    </div>
  );
};
export default RestaurantMenu;