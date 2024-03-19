import { useContext } from "react";
import {IMG_CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
// const styleCard = {backgroundColor: "#0303"};    /* STYLES  //in-line css method-2*/
const Card = (props) => {   // *dynamic/re-useable card component
    // const {imgSrc,resName,desc,ratings,time} = props;  //**Destructuring props (Object)**
    const { resData } = props;  
    console.log(resData); 
    const { name, avgRating, cloudinaryImageId, locality, costForTwo,cuisines, sla } = resData?.info; 
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    return (
      // <div className="res-card" style={{backgroundColor: "#0303"}}> //in-line css method-1
        // <div className="m-4 p-4 w-[250px] rounded-lg" style={styleCard}>
        <div data-testid="resCard" className="m-4 p-4 w-[280px] rounded-lg bg-gray-100 hover:bg-gray-300">
          <img className="rounded-lg" src= { IMG_CDN_URL + cloudinaryImageId} />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
           <h4>{locality}</h4>
           <h4 className="text-wrap">{cuisines.join(",")}</h4>    {/* array.join(",") - to join items separated by ',' */}
           <h4>{avgRating}</h4>
           <h4> {costForTwo}</h4>
           <h4>{sla?.slaString}</h4>
           <h4> {loggedInUser}</h4>
           
         </div>
       );
};
//*Higher Order component; input - restaurant card ; output - restaurant card *promoted*
export const withPromotedLabel = (Card) => {
  return (props) =>{    //returns a new component
    return(   //JSX
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
        <Card {...props}/>
      </div>
    )
  }
}
export default Card;