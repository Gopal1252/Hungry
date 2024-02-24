import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../public/images/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo w-64" src={logo} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="text-orange-900">Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div class="app ">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);