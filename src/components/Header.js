import { useState, useContext } from "react";
import { header_logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; //*using UseSelector for subscribing to the Redux store

/*Header component*/
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  //*SUBSCRIBING to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-200 shadow-lg mb-2 sm:bg-green-200">
      <div className="logo-container">
        <img className="w-56" src={header_logo_url} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus === true ? "✅":"🔴"}</li>
          <li className="px-4"><Link to={"/"}>Home</Link></li>
          <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
          <li className="px-4"><Link to={"/about"}>About us</Link></li>
          <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-4 font-bold"><Link to={"/CartPage"}> Cart ({cartItems.length})</Link></li>
          <button className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}>
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;