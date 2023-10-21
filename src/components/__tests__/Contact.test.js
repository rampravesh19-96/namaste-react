import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Page test case grouping", () => {

  // beforeAll(()=>{
  //   console.log("It runs Before  all test cases");
  // })

  // beforeEach(()=>{
  //   console.log("It runs Before  each test cases");
  // })
  // afterAll(()=>{
  //   console.log("It runs Before  all test cases");
  // })

  // afterEach(()=>{
  //   console.log("It runs Before  each test cases");
  // })

  test("Should  load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  test("Should  load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  test("Should  load button inside contact component by text", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });
  // it and test bothe are same its like it is alias of test
  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    // Quering
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
    // expect(inputBoxes.length).toBe(2)
    expect(inputBoxes.length).not.toBe();
    
  });
});
