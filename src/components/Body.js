import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import CardSkeleton from "./CardSkeleton";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchText,setSearchText] = useState("");

    // console.log(listOfRestaurants);

    const handleSearch = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.join(", ") .toLowerCase().includes(searchText.toLowerCase()) 
        );

        setFilteredRestaurants(filteredList);
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // console.log(json.data);

        // optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setIsLoading(false)
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <h1>
                Looks like you are offline!!! Please check your internet connection
            </h1>
        )
    }

    return (
        <div className="body mx-48 my-5">
            <div className="flex justify-center m-5 search">
                <div className="w-[40rem] h-[4rem] text-lg border-2 border-[#e8e8e8] rounded-full shadow-md flex justify-between items-center px-5 my-2">
                    <input type="text" value={searchText} onChange={handleChange} className="searchBox w-[36rem] border-transparent focus:border-transparent focus:ring-0" placeholder="Search for restaurant, cuisine or a dish"></input>
                    <button onClick={handleSearch}><IoIosSearch className="text-3xl" /></button>
                </div>
            </div>

            <div className="fliter">
                <button 
                className="filter-btn px-5 py-2 border border-gray-500 text-sm rounded-full my-2 mx-3 hover:bg-gray-100 cursor-pointer"
                onClick={()=>{
                    const filtered_List  = listOfRestaurants.filter((res) => res.info.avgRating>=4); 
                    const sorted_list = filtered_List.sort((res1,res2) => {
                        return res2.info.avgRating - res1.info.avgRating;
                    })
                    setFilteredRestaurants(sorted_list);
                }}
                >
                    Top Rated Restautants
                </button>
            </div>
            <div className="restaurant-continer flex flex-wrap justify-normal">
                {isLoading && <CardSkeleton cards={9} />}
                { 
                    filteredRestaurants?.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div> 
    )
}

export default Body;