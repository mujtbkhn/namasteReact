import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

describe("header component testing", () => {

    it("should render header with login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        // const loginButton = screen.getByRole('button')
        const loginButton = screen.getByRole('button', { name: "LogOut" })

        expect(loginButton).toBeTruthy()
        // expect(loginButton).toBeInTheDocument()
    })

    it("should render header with cart items 0", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartItems = screen.getByText('cart - (0 items)')

        expect(cartItems).toBeInTheDocument()
    })

    it("should render logOut button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const logOutButton = screen.getByRole('button', { name: "LogOut" })
        fireEvent.click(logOutButton)

        const logInButton = screen.getByRole('button', { name: "LogIn" })
        expect(logInButton).toBeInTheDocument()
    })
})