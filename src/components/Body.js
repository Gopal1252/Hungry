import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return (
        <div className="body mx-40 my-5">
            <div className="fliter">
                <button 
                className="filter-btn px-3 py-2 border border-gray-500 text-sm rounded-full my-2 mx-3 hover:bg-gray-100 cursor-pointer"
                onClick={()=>{
                    const filtered_List  = resList.filter((res) => res.info.avgRating>=4); 
                    setListOfRestaurant(filtered_List);
                }}
                >
                    Top Rated Restautants
                </button>
            </div>
            <div className="restaurant-continer flex flex-wrap justify-evenly">
                {
                  listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body;