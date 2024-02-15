import { useState } from "react";
import { header_logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

/*Header component*/
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={header_logo_url} />
      </div>
      <div className="nav-items">
        <ul>
        <li>Online Status: {onlineStatus === true ? "✅":"🔴"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <li>Cart</li>
          <button className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;