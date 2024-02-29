import { useState } from "react";
import logo from "../../public/images/logo.svg"; 
import { PiShoppingCart } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";


const Header = () => {

    const [btnName, setBtnName] = useState("Sign In");

    const handleClick = () => {
        if(btnName == "Sign In"){
            setBtnName("Sign Out");
        }
        else{
            setBtnName("Sign In");
        }
    }

    return (
        <div className="header flex justify-between items-center mx-16 py-5 px-3">
            <div className="logo-container">
                <img className="logo w-64 cursor-pointer" src={logo} />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="nav-items">
                <ul className="flex text-lg font-xl items-center">
                    <li className="mr-5 pr-5 cursor-pointer">Home</li>
                    <li className="mr-5 pr-5 cursor-pointer">About Us</li>
                    <li className="mr-5 pr-5 cursor-pointer flex"><PiShoppingCart className="text-2xl mr-1" />Cart</li>
                    <button className="px-3 py-1 mb-1 flex border border-gray-500 rounded-full hover:bg-gray-100 cursor-pointer" onClick = {handleClick}><CiUser className="text-2xl" />{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;