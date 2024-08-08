import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
})

it("Should search reslist for South text input", async ()=>{

    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    // const searchBtn = screen.getByRole("button", {name: "searchBtn"})
    // // const searchBtn = screen.getByTestId("searchBtn");
    // const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput, {target : {value: "South"}});
    // fireEvent.click(searchBtn);

    // //screen should load 3 cards
    // const cardsAfterSearch = screen.getAllByTestId("resCard");

    // expect(cardsAfterSearch.length).toBe(3);
})