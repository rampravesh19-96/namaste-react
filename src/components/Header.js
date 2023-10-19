import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onLineStatus = useOnlineStatus();

  const [loginText,setLoginText] = useState("Login")

  const handleLoginClick = () => {
    if(loginText==="Login"){
      setLoginText("Logout")
    }else{
      setLoginText("Login")
    }
  }

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg bg-pink-100 items-center">
      <div className="w-28">
        <img className="" src={LOGO_URL} alt="" />
      </div>
      <div className="flex">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online Status: {onLineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li><button className="bg-green-200 w-20 py-1 rounded" onClick={handleLoginClick}>{loginText}</button></li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
