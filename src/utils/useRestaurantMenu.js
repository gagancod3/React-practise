import {useEffect, useState} from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    // console.log("called");
    const [resInfo,setResInfo] = useState(null);
    //fetchdata
    useEffect(() =>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const data =  await fetch(MENU_API_URL+resId);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantMenu;