import veg from "../../public/images/veg.png";
import nonveg from "../../public/images/non-veg.png";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CartList = ({items}) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            <div>
                {items.map((item) => (
                    <div key={item.card.info.id} className="grid grid-cols-7 pt-3 pb-10 mb-1 border-b-2">
                        <div className="col-start-1 col-span-1 px-1 flex items-center">
                             <img className="rounded-xl object-scale-down" src={CDN_URL + item.card.info.imageId} />
                        </div>
                        <div className="col-start-2 col-span-5 pl-5">
                           <div>{item.card.info.isVeg? <img className="w-4" src={veg}/> : <img className="w-5" src={nonveg}/>}</div>
                           <div className="font-semibold">{item.card.info.name}</div>
                           {/* <div>₹{item.card.info.price ? (item.card.info.price/100.00).toFixed(2) : (item.card.info.defaultPrice/100.00).toFixed(2)}</div> */}
                           <div className="text-sm text-gray-500 max-w-[90%]">{item.card.info.description}</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="col-start-7 col-span-1 px-5 py-1 border-2 rounded-xl">- 1 +</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartList;