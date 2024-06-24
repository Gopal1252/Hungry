import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
    it("Should load the contact component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load the submit button inside the contact component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        // const button = screen.getByText("Let's talk");//also works
    
        //assertion
        expect(button).toBeInTheDocument();
    })
    
    it("Should load 6 input boxes", () => {
        render(<Contact/>);
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(6);
        
    })
})