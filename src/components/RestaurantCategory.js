import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, index, showItems, setShowIndex}) => {
    // console.log(data)

    const [show, setShow] = useState((index == 0)?true:false);

    const handleClick = () => {
            setShow(!show);
            setShowIndex();
    }

    return ( 
        <div className="py-3 px-5 text-lg">
            <div>
                <div className="flex justify-between py-2 px-3 cursor-pointer" onClick={handleClick}>
                    <div className="font-bold text-xl">{data.title} ({data.itemCards.length})</div>
                    <div>
                        {showItems && show && <MdOutlineKeyboardArrowUp className="text-2xl" />}
                        {!(showItems && show) && <MdOutlineKeyboardArrowDown className="text-2xl" />}
                    </div>
                </div>
                <div className="px-3">
                    {showItems && show && <ItemList items={data.itemCards} />}
                </div>
            </div>
            <div className="h-4 bg-gray-200 rounded px-3"></div>
        </div>
    )
}

export default RestaurantCategory;