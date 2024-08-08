import { GoStarFill } from "react-icons/go";
import { CDN_URL } from "../utils/constants"; 

const RestaurantCard = ({resData}) => { 
 
  // console.log(resData);

  const {name, cloudinaryImageId, cuisines, costForTwo, avgRating} = resData?.info
  const {slaString} = resData?.info.sla

    return (
        <div data-testid="resCard" className="restaurant-card w-[25rem] h-[27rem] p-3 m-2 border-2 border-white hover:border-[#e8e8e8] rounded-2xl hover:shadow-lg cursor-pointer">
            <img className="rounded-2xl w-[24rem] h-[18rem]" src= {CDN_URL+cloudinaryImageId}/>
            <div className="flex justify-between mt-2">
                <h3 className="text-xl mr-1">{name}</h3>
                <div className="flex text-white bg-green-700 px-2 rounded-md items-center text-sm max-h-7">{avgRating} <GoStarFill className="text-xs ml-1" /></div>
            </div>
            <h4 className="text-gray-500 mt-2">{cuisines.join(", ")}</h4>
            <div className="flex justify-between mt-2">
              <div className="text-lg font-bold">{costForTwo}</div>
              <div>{slaString}</div>
            </div>
        </div>
    )
}  

export default RestaurantCard;