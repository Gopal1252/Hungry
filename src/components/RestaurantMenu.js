import CardSkeleton from "./CardSkeleton";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <CardSkeleton />;
    console.log(resInfo);


    const { name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    // console.log(resInfo);
    // console.log(itemCards);

    return (
        <div className="">
            <h1 className="text-3xl">{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2 className="text-xl">Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs{item.card.info.price/100  || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
