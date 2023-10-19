import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../mocks/resCardMock.json"
import "@testing-library/jest-dom";


it("Should render Restaurant Component with props data",()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Soul Rasa")

    expect(name).toBeInTheDocument()
})
it("Should render Restaurant Card with promoted label",()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("4.4")

    expect(name).toBeInTheDocument()
})