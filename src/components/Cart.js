import { useSelector } from "react-redux";
import CartList from "./CartList";
import empty_cart from "../../public/images/empty_cart.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return cartItems.length == 0 ? (
        <div className="flex flex-col items-center mt-32">
            <img className="w-96" src={empty_cart}/>
            <Link to="/"><button className="mt-5 px-4 py-2 bg-[#fb5e87] hover:bg-[#f63e6f] rounded-xl text-white font-bold">SEE RESTAURANTS NEAR YOU</button></Link>
        </div>
    ) : (
        <div className="my-10">
            <div className="text-center text-3xl font-bold mb-5">Cart</div>
            <div className="ml-5">
                <button onClick={handleClearCart} className="m-5 px-3 py-2 bg-[#fb5e87] hover:bg-[#f63e6f] text-white text-lg font-bold rounded-xl">Clear Cart</button>
            </div>
            <div className="grid grid-cols-3 mx-10">
                <div className="col-start-1 col-span-2 p-5 border-2 rounded-2xl mr-5">
                    <CartList items={cartItems} />
                </div>
                <div className="col-start-3 col-span-1 p-5 border-2 rounded-2xl ml-5">
                    <div className="text-xl font-bold text-center">ORDER SUMMARY</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;