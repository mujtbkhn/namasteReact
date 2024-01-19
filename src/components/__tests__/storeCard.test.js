import { render, screen } from "@testing-library/react"
import { StoreCard } from "../../cards/StoreCard"
import STORE_MOCK from "../__mocks__/storeCardMock.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"


// it("should render store card correctly", () => {

//     render(<StoreCard item={STORE_MOCK} />)

//     const name = screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")

//     expect(name).toBeInTheDocument()
// })