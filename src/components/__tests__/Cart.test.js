import RestaurantManu from "../RestaurantManu";
import MOCK_DATA from "../../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";


import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});


it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantManu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Soul Rasa");

  fireEvent.click(accordianHeader);
});
