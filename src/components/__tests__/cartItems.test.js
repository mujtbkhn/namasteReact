import { fireEvent, render, screen } from "@testing-library/react"
import { StoreDetails } from "../StoreDetails"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"
import { StoreCard } from "../../cards/StoreCard"


global.fetch = jest.fn(() => {

    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("Integration testing: Cart Items", () => {


    it("should render list of cart Items correctly", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <StoreCard />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        );

        const addCartBtn = await screen.findByRole("button", { name: "Add to cart" });
        const storeCard =  screen.getByTestId("storecards");

        fireEvent.click(addCartBtn);

        expect(storeCard).toBeInTheDocument();
    });

})
