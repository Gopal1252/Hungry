import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body mx-40 my-5">
            
            <div className="restaurant-continer flex flex-wrap justify-between">
                {
                  resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default Body;