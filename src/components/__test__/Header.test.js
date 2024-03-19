import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with a login button",() => {
    //provide redux store to header
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("login");
    
    // specifically looks for login button
    const loginButton = screen.getByRole("button", {name:"login"});
    
    //* toBeInTheDocument is coming from import "@testing-library/jest-dom"
    expect(loginButton).toBeInTheDocument();

});

it("should load header component with cart item zero",() => {
    //provide redux store to header
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByText("Cart (0)");
    const loginButton = screen.getByText(/Cart/); //regEx
    
    //* toBeInTheDocument is coming from import "@testing-library/jest-dom"
    expect(loginButton).toBeInTheDocument();

});

it("should load header component with login button when clicked change to logout",() => {
    //provide redux store to header
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name:"login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "logout"});
    
    //* toBeInTheDocument is coming from import "@testing-library/jest-dom"
    expect(logoutButton).toBeInTheDocument();
});