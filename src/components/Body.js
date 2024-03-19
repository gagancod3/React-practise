import Card, {withPromotedLabel} from "./Card";
import { useEffect, useState, useContext} from "react"; //named import for 'useState'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // state variables
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRatedRes,setTopRatedRes] = useState(false);
  const PromotedRestaurant = withPromotedLabel(Card);
  // *useEffect(<callback>, <dependencies>)
  /* it's called after the component render */
  useEffect(() => {
    fetchData();
    // console.log(listOfRestaurant);
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
  
  const {loggedInUser, setUserName} = useContext(UserContext);
  
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black rounded-lg"
            value={searchText} //bind input tag with state variable
            /* upon typing in search input, the component is getting re-rendered */
            onChange={(e) => {
              setSearchText(e.target.value); // updates with value from event
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter card and Update the UI
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(searchText);
              setFilteredRestaurant(filteredRes);
            }}
          >Search
          </button>
        </div>
        <div className="search m-4 p-4">
        <button
          data-testid = "topRatedRes"
          className="px-4 py-1 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            // console.log(topRatedRes);
            // filter card on basis of average Ratings of restaurants
            const filteredListOfRes = topRatedRes ? listOfRestaurant : listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4
            ) 
            setTopRatedRes(!topRatedRes)
            setFilteredRestaurant(filteredListOfRes);
          }}>Top rated restaurants
          {/* {topRatedRes ? "✅" : ""} */}
        </button>
        </div>
        <div className="search m-4 p-4">
         <label>Username: </label>
          <input className="border border-black p-2 rounded-md" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* Map function - always use a unique *key* while using map*/}
        {filteredRestaurant.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res.info.id}>
            {/* if the restaurant is having avgRating less than 4, add a promoted label to it */
            (res?.info?.avgRating < 4.2)  ? <PromotedRestaurant resData={res} /> : <Card resData={res} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;