import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";



//*UNIT TESTING
describe('contact us page test cases', () => {
    afterAll(()=>{
        //* at the end
        console.log("After All");
    });
    afterEach(()=>{
        console.log("After Each");
    });
    beforeAll(()=>{
        //* at the start
        console.log("Before All");
    });
    beforeEach(()=>{
        //* helpful if we want to do some cleanup task
        console.log("Before Each");
    });
    test("Should load contact us component", () => {
        //rendered onto jsdom
        render(<Contact/>); 
    
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact component", () => {
        //rendered onto jsdom
        render(<Contact/>); 
    
        const button = screen.getByRole("button"); // one way
        // const button = screen.getByText("Submit"); //another way 
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should find PlaceHolder name inside contact component", () => {
        //rendered onto jsdom
        render(<Contact/>); 
    
        //Querying
        const inputName = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    //* we can use 'it' instead of 'test' as well, both work sameway
    //* 'it' is an alias for 'test' keyword
    it("Should load 2 input boxes on the Contact component",() => {
        render(<Contact/>);
        //* if there are multiple elements, then do 'getAllByRole'
        //* only single element, use 'getByRole'
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes ,inputBoxes.length); //* Returns JSX element/React element/React FiberNote
        //Assertion
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).toBeTruthy(); //*pass if value is not false

    });
});