import logo from "../public/images/logo.svg"; 
import { PiShoppingCart } from "react-icons/pi";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="header flex justify-between items-center mx-16 py-5 px-3">
            <div className="logo-container">
                <img className="logo w-64 cursor-pointer" src={logo} />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="nav-items">
                <ul className="flex text-lg font-xl">
                    <li className="mr-5 pr-5 cursor-pointer">Home</li>
                    <li className="mr-5 pr-5 cursor-pointer">About Us</li>
                    <li className="mr-5 pr-5 cursor-pointer">Contact Us</li>
                    <li className="pr-5 cursor-pointer flex"><PiShoppingCart className="text-2xl mr-2" />Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;