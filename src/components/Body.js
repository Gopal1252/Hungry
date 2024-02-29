import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import CardSkeleton from "./CardSkeleton";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setIsLoading(false)
    }

    return (
        <div className="body mx-40 my-5">
            <div className="fliter">
                <button 
                className="filter-btn px-3 py-2 border border-gray-500 text-sm rounded-full my-2 mx-3 hover:bg-gray-100 cursor-pointer"
                onClick={()=>{
                    const filtered_List  = listOfRestaurants.filter((res) => res.info.avgRating>=4); 
                    setListOfRestaurants(filtered_List);
                }}
                >
                    Top Rated Restautants
                </button>
            </div>
            <div className="restaurant-continer flex flex-wrap justify-evenly">
                {isLoading && <CardSkeleton cards={9} />}
                { 
                  listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body;