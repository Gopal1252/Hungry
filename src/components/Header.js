import { useState } from "react";
import logo from "../../public/images/logo.svg"; 
import { PiShoppingCart } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {

    const [btnName,setBtnName] = useState("Sign In");
    const handleClick = () => {
        if(btnName == "Sign In"){
            setBtnName("Sign Out");
        }
        else{
            setBtnName("Sign In");
        }
    }

    const [visible,setVisible] = useState(false);

    const ToggleClass = () => {
        setVisible(!visible);
    }

    return (
        <div className="py-5 shadow-xl">
            <div className="flex justify-between w-[92%] mx-auto">
                <div className="logo-container">
                    <Link to="/"><img className="logo w-64 cursor-pointer" src={logo} /></Link>
                </div>

                <div className={visible?"top-[9%]":"" + "nav-items absolute md:static bg-white min-h-[60vh] md:min-h-fit left-0 top-[-100%] w-full md:w-auto flex items-center lg:pr-32"}>
                    <ul className="flex flex-col md:flex-row text-md lg:text-lg md:items-center gap-8 md:gap-[4vw]">
                        <li className="cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
                        <li className="cursor-pointer flex"><PiShoppingCart className="text-2xl mr-1" />Cart</li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-6">
                        <button className="px-3 py-1 flex border border-gray-500 rounded-full hover:bg-gray-100 cursor-pointer" onClick = {handleClick}><CiUser className="text-2xl" />{btnName}</button>
                        <IoMenu onClick={ToggleClass} className="cursor-pointer text-3xl md:hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;