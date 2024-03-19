import { render, screen } from "@testing-library/react";
import Card from "../Card";
import MOCK_CARD_DATA from "../../mocks/mockCardData.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with props data",() => {
    render(
    <Card resData={MOCK_CARD_DATA}/>
    );

    const restaurantName = screen.getByText("Bhature Walas");
    
    expect(restaurantName).toBeInTheDocument();
});

// it("should render restaurant card component with promoted card",() => {
//     render(
//     <Card resData={MOCK_CARD_DATA}/>
//     );
//     const restaurantName = screen.getByText("Rohini",{"locality": "Rohini"});
//     console.log(restaurantName);
//     expect(restaurantName).toBeInTheDocument();
// });