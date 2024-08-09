import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(`https://hungry-proxy-server.onrender.com/menu?restaurantId=${resId}`);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;