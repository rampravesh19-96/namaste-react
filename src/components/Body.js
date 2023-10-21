import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfrestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const RestarantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log(filteredRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9175337&lng=77.65045719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let navigatedData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfrestaurants(navigatedData);
    setFilteredRestaurant(navigatedData);
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  const {loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="search"
            data-testid="searchInput"
            className="border border-solid border-black outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-1.5 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const restaurantFileter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(restaurantFileter);
              setFilteredRestaurant(restaurantFileter);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-1.5 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              // console.log("filteredList");
              // console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center gap-3">
          <label>UserName: </label>
          <input type="text" className="border border-black rounded-sm p-1" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="flex-grow"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestarantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
        \
      </div>
    </div>
  );
};

export default Body;
