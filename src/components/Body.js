import { useState, useEffect } from "react";
import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);
  // whenever state variable update, react triggers a reconcilisation cycle( rerenders component)
  console.log("body renders");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //optional chaining -- ?
    setListOfRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering using if
  // if (ListOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurants = ListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfFilteredRestaurant(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurant.map((restuarant) => (
          <RestaurantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
