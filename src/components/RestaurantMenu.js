import { useState, useEffect } from "react";
import CardSkeleton from "./CardSkeleton";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId); 
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <CardSkeleton />;

    const { name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(resInfo);
    // console.log(itemCards);

    return (
        <div className="">
            <h1 className="text-3xl">{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2 className="text-xl">Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li>
                        {item.card.info.name} - Rs{item.card.info.price/100  || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
