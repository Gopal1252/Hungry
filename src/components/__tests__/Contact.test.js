import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the contact component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
})

test("Should load the submit button inside the contact component", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");
    // const button = screen.getByText("Let's talk");//also works

    //assertion
    expect(button).toBeInTheDocument();
})

test("Should load 5 input boxes", () => {
    render(<Contact/>);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(6);
    
})