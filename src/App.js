import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../public/images/logo.svg";
import { PiShoppingCart } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { GoStarFill } from "react-icons/go";

const SearchBar = () => {
    return (
        <div className="w-[40rem] h-[4rem] text-lg border-2 border-[#e8e8e8] rounded-lg shadow-md flex justify-between items-center px-2"><input type="text" className="w-[36rem] outline-none" placeholder="Search for restaurant, cuisine or a dish"></input><button><IoIosSearch className="text-3xl" /></button></div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card w-[25rem] h-[30rem] p-3 m-2 border-2 border-white hover:border-[#e8e8e8] rounded-2xl hover:shadow-md">
            <img className="rounded-2xl h-[18rem]" src= "https://b.zmtcdn.com/data/pictures/chains/1/171/3750aac8d138fbee606579cf54412b88_o2_featured_v2.jpg?output-format=webp"/>
            <div className="flex justify-between mt-2">
                <h3 className="text-xl">McDonald's</h3>
                <div className="flex text-white bg-green-700 px-2 rounded-md items-center text-sm">4.3 <GoStarFill className="text-xs" /></div>
            </div>
            <div className="flex justify-between mt-2">
                <h4 className="text-gray-500">Burger, Wraps, Fast Food...</h4>
                <div className="text-gray-500">₹400 for one</div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body mx-40 my-5">
            
            <div className="restaurant-continer flex flex-wrap justify-between">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

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
                <ul className="flex text-lg font-medium">
                    <li className="mr-5 pr-5 cursor-pointer">Home</li>
                    <li className="mr-5 pr-5 cursor-pointer">About Us</li>
                    <li className="mr-5 pr-5 cursor-pointer">Contact Us</li>
                    <li className="pr-5 cursor-pointer flex"><PiShoppingCart className="text-2xl mr-2" />Cart</li>

                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div class="app ">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);