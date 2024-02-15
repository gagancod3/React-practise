import Card from "./Card";
import { useEffect, useState } from "react"; //named import for 'useState'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // state variables
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // *useEffect(<callback>, <dependencies>)
  /* it's called after the component render */
  useEffect(() => {
    fetchData();
  }, []);
  //* API Call - fetchData()
  const fetchData = async () => {
    //fetch method used to fetch data from API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7157406&lng=77.1351454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    /* https://proxy.cors.sh/ - we've used a CORS chrome extension for resolve CORS issue */
    const json = await data.json();
    //* below mapping can change in future, we've to map it accordingly
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline! Please check your internet connection.</h1>
  // *conditional rendering - rendering on the basis of condition
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText} //bind input tag with state variable
            /* upon typing in search input, the component is getting re-rendered */
            onChange={(e) => {
              setSearchText(e.target.value); // updates with value from event
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //filter card and Update the UI
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText);
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter card on basis of average Ratings of restaurants
            const filteredListOfRes = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredListOfRes);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Map function - always use a unique *key* while using map*/}
        {filteredRestaurant.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res.info.id}>
            <Card resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
