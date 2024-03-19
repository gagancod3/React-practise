import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import CartPage from "../CartPage";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should load restaurant menu component",async () =>{
    await act(async () => render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <CartPage />
    </Provider>
    </BrowserRouter>
    ));

    // const accordianHeader = screen.getByText("Recommended");
    // fireEvent.click(accordianHeader);

    // expect(screen.getAllByTestId("foodItems").length).toBe(4);

    // const addBtns = screen.getAllByRole("button", {name: "Add +"});
    // fireEvent.click(addBtns[0]);
    // console.log(addBtns.length);

    expect(screen.getByText("Cart(0)")).toBeInTheDocument();
});