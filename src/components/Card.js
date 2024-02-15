import {IMG_CDN_URL} from "../utils/constants";
/* STYLES  //in-line css method-2*/
const styleCard = {
    backgroundColor: "#0404",
  };
// *dynamic/re-useable card component
const Card = (props) => {
    //**Destructuring props (Object)**
    // const {imgSrc,resName,desc,ratings,time} = props;
    // console.log(props);
    const { resData } = props;
    // console.log(resData); 
    const { name, avgRating, cloudinaryImageId, locality, costForTwo,cuisines, sla } = resData?.info; 
    return (
      // <div className="res-card" style={{backgroundColor: "#0303"}}> //in-line css method-1
        <div className="res-card" style={styleCard}>
          <img className="res-logo" src= { IMG_CDN_URL + cloudinaryImageId} />
          <h3>{name}</h3>
           <h4>{locality}</h4>
           {/* array.join(",") - to join items separated by ',' */}
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating}</h4>
           <h4> {costForTwo}</h4>
           <h4>{sla?.slaString}</h4>
         </div>
       );
  };
export default Card;