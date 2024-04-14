import veg from "../../public/images/veg.png";
import nonveg from "../../public/images/non-veg.png";
import { CDN_URL } from "../utils/constants";
import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return ( 
        <div>
            <div>
                {items.map((item) => (
                    <div key={item.card.info.id} className="grid grid-cols-5 pt-3 pb-10 mb-1 border-b-2">
                         <div className="col-start-1 col-span-4">
                            <div>{item.card.info.isVeg? <img className="w-4" src={veg}/> : <img className="w-5" src={nonveg}/>}</div>
                            <div className="font-semibold">{item.card.info.name}</div>
                            <div>₹{item.card.info.price ? (item.card.info.price/100.00).toFixed(2) : (item.card.info.defaultPrice/100.00).toFixed(2)}</div>
                            <div className="text-sm text-gray-500 max-w-[80%]">{item.card.info.description}</div>
                         </div>
                         <div className="col-start-5 col-span-1 text-center">
                             <img className="rounded-xl object-scale-down" src={CDN_URL + item.card.info.imageId} />
                             <button onClick={() => handleAddItem(item)} className="border-2 rounded-xl px-3 sm:px-5 md:px-7 py-1 text-sm sm:text-md md:text-lg font-bold text-green-500 mt-[-12] bg-white z-100">ADD</button>
                         </div>
                         {/* <div className="col-start-1 col-span-5 h-[0.1rem] bg-gray-300"></div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList;