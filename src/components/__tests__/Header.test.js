import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a SignIn button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const signInButton = screen.getByRole("button", { name : "Sign In" });

    expect(signInButton).toBeInTheDocument();
});

it("Should load Header Component with Cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);//regex

    expect(cartItems).toBeInTheDocument();
});

it("Should change Sign In button to Sign Out", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const signInButton = screen.getByRole("button", { name : "Sign In" });

    fireEvent.click(signInButton);

    const signOutButton = screen.getByRole("button", {name: "Sign Out"});

    expect(signInButton).toBeInTheDocument();

});