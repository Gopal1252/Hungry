import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <div className="w-[40rem] h-[4rem] text-lg border-2 border-[#e8e8e8] rounded-lg shadow-md flex justify-between items-center px-2"><input type="text" className="w-[36rem] outline-none" placeholder="Search for restaurant, cuisine or a dish"></input><button><IoIosSearch className="text-3xl" /></button></div>
    )
}

export default SearchBar;