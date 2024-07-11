import CardSkeleton from "./CardSkeleton";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import star from "../../public/images/star2.png";
import { LuDot } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);


    if(resInfo === null) return <CardSkeleton />;
    // console.log(resInfo);

    const { name, avgRating, totalRatingsString, sla, areaName, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);

    // console.log(resInfo);
    // console.log(itemCards);

    return (
        <div className="mt-5 grid grid-cols-6 sm:grid-cols-5">
            <div className="col-start-2 col-span-4 sm:col-start-2 sm:col-span-3 px-3 py-5">

                //Restaurant Name
                <h1 className="text-3xl font-bold mb-5">{name}</h1>

                //Restaurant's Info
                <div className="border-2 rounded-2xl p-5 shadow-xl mb-10">
                    <div className="flex flex-col md:flex-row text-lg md:text-xl font-bold">
                        <div className="flex">
                            <div><img className="w-5 mt-1 rounded-xl mr-[0.40rem]" src={star} /></div>
                            <div className="mr-2">{avgRating}</div>
                            <div className="mr-2">({totalRatingsString})</div>
                        </div>
                        <div className="w-5 md:mt-1 mr-1 text-gray-500 invisible md:visible"><LuDot/></div>
                        <div className="mr-2">{costForTwoMessage}</div>
                    </div>
                    <div className="mt-2 text-md md:text-lg text-[#fb5e87]">
                        <h3>{cuisines.join(", ")}</h3>
                    </div>
                    <div className="mt-1 text-md md:text-lg">
                        <div className="flex">
                            <div className="mt-1 mr-1"><CiLocationOn className=" text-xl font-bold" /></div>
                            <div className="font-bold mr-3">Outlet</div>
                            <div className="font-light">{areaName}</div>
                        </div>
                    </div>
                    <div className="mt-1 text-md md:text-lg font-bold flex">
                        <div className="mt-[0.20rem] mr-1"><CiClock2 className="text-xl" /></div>
                        <div>{sla.slaString.toLowerCase()}</div>
                    </div>
                </div>

                //MENU
                <div className="text-center text-3xl font-bold mb-5">Menu</div>

                {/* {Categories Accordion} */}
                <div>
                    {categories.map((category, index) => (
                        <RestaurantCategory 
                            key={category.card?.card?.title} 
                            data={category?.card?.card} 
                            showItems={index === showIndex ? true : false} 
                            setShowIndex={() => setShowIndex(index)}
                        /> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;
