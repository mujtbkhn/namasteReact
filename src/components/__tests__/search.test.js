import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../__mocks__/searchMockData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {

    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should return the searched query", async () => {


    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </BrowserRouter>
        )
    )

    // const be4cardsSearch = screen.getAllByTestId("storecards")
    // expect(be4cardsSearch.length).toBe(20)

    const searchButton = screen.getByRole("button", { name: "Search" })

    // console.log(searchButton)
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: "Gold" } })
    fireEvent.click(searchButton)

    const afterCardsSearch = screen.getAllByTestId("storecards")

    expect(afterCardsSearch.length).toBe(4)

})