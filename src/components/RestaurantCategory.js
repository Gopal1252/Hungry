import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    console.log(data)
    return (
        <div className="py-3 px-5 text-lg">
            <div>
                <div className="flex justify-between py-2 px-3">
                    <div className="font-bold">{data.title} ({data.itemCards.length})</div>
                    <div><MdOutlineKeyboardArrowDown className="text-2xl" /></div>
                </div>
                <div className="px-3">
                    <ItemList items={data.itemCards} />
                </div>
            </div>
            <div className="h-4 bg-gray-200 rounded px-3"></div>
        </div>
    )
}

export default RestaurantCategory;