import { render, screen } from "@testing-library/react";
import { Dev } from "../Dev"
import "@testing-library/jest-dom"

describe("test cases for Dev page", () => {

    test("should return heading", () => {


        render(<Dev />)

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    })
    test("should return button", () => {


        render(<Dev />)

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    })
    test("should return button with name", () => {


        render(<Dev />)

        const button = screen.getByText('Submit');

        expect(button).toBeInTheDocument();
    })
    test("should return 2 inputboxes", () => {
        render(<Dev />)

        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes.length).toBe(2);
    })
})
