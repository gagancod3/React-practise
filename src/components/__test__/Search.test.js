import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render the Body Component with Search ", async () => {
    await act(async() => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>));
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    // Querying
    const searchBtn = screen.getByRole("button", {name: "Search"});
    // console.log(searchBtn);

    const searchInput = screen.getByTestId("searchInput");
    console.log(searchInput);

    fireEvent.change(searchInput,{target: {value:"Bhature"}});
    fireEvent.click(searchBtn);

    //Assertion
    const cards = screen.getAllByTestId("resCard");
    //screen should load 5 cards (works in morning hours)
    
    expect(cards.length).toBe(5);
    expect(searchBtn).toBeInTheDocument();
});

it("should render the Body Component with Top Rated Restaurant ", async () => {
    await act(async() => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>));
    
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);
    // Querying
    const topRatedBtn = screen.getByRole("button", {name: "Top rated restaurants"});

    fireEvent.click(topRatedBtn);

    // //Assertion
    const cards = screen.getAllByTestId("resCard");
    // //screen should load 5 cards (works in morning hours)
    
    // expect(cards.length).toBe(5);
    // expect(searchBtn).toBeInTheDocument();
});
