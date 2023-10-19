import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore"



test("Should load Header component with login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // Your assertions here

  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button",{name:"Login"})
  // const loginButton = screen.getByText("Cart (0 items)")
  // const loginButton = screen.getByText(/Cart/) // with regex partial matching
  
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button",{name:"Logout"})
  expect(logoutButton).toBeInTheDocument();
});

