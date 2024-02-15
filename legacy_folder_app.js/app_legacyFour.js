import React from "react";
import ReactDOM from "react-dom/client";
// import companyLogo from './images/logo-img-two.png';

/*
Header - 
    logo 
    nav links – home, about, cart
Body – 
    Search with a button
    restaurant container 
        restaurant card (with details like ratings etc)
Footer – 
    copyright
    Links
    contact details 
*/

/*Header component*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* <img className="logo" src={companyLogo} /> */}
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

/* STYLES  //in-line css method-2*/
const styleCard = {
  backgroundColor: "#0404",
};

// *dynamic/re-useable card component
const Card = (props) => {
  // console.log(props);
  //**Destructuring props (Object)**

  // const {imgSrc,resName,desc,ratings,time} = props;
  const { resData } = props;
  const { imgSrc, resName, desc, cuisines, ratings, time, costForTwo } =
    resData?.data; // used optional-chaining
  return (
    // <div className="res-card" style={{backgroundColor: "#0303"}}> //in-line css method-1
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={imgSrc} />
      <h3>{resName}</h3>
      <h4>{desc}</h4>
      <h4>{cuisines.join(",")}</h4>
      {/* array.join(",") - to join items separated by ',' */}
      <h4>{ratings}</h4>
      <h4>{time}</h4>
      <h4> Rs.{costForTwo / 100} for Two</h4>
    </div>
  );
};

//*data from backend apis comes in JSON format in similar pattern only
const resList = {
  data: [
    {
      type: "restaurant",
      data: {
        id:"0",
        resName: "ABC foods",
        desc: "Local & Exotic fruits, vegetables",
        cuisines: ["fruits", "vegetables", "berries"],
        ratings: "4.4⭐",
        time: "30 mins away",
        imgSrc:
          "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=",
        costForTwo: 40000,
      },
    },
    {
      type: "restaurant",
      data: {
        id:"1",
        resName: "KFC",
        desc: "delicious chicken",
        cuisines: ["north Indian", "south Indian", "chinese"],
        ratings: "4.2⭐",
        time: "20 mins away",
        imgSrc:
          "https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg",
        costForTwo: 35000,
      },
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <Card  resName="ABC foods" desc="Local & Exotic fruits, vegetables" ratings="4.4⭐" time="30 mins away" imgSrc="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8="/> */}
        {/* <Card resName="KFC" desc="delicious chicken" ratings="4.2⭐" time="20 mins away" imgSrc="https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg"/> */}

        {/* <Card  resData={resList.data[0]}/>
            <Card  resData={resList.data[1]}/> */}
        
        {/* Map function - always use a unique *key* while using map*/}
        {resList?.data.map((restaurant) => (
          <Card key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

//functional component
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//this how we render react functional components
root.render(<Applayout />);
