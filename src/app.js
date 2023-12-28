import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { Footer } from "./components/Footer"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Error } from "./components/Error";
import { Mujju } from "./components/Mujju";
import { Dev } from "./components/Dev";
import { StoreDetails } from "./components/StoreDetails";
import Profile from "./components/Profile";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Mohammad Raees",
        email: "support@raeesbhai.com",
        age: 25,
    })
    return (

        <>
            <Provider store={appStore}>
                <userContext.Provider
                    value={{
                        user: user,
                        setUser: setUser,
                    }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </userContext.Provider>
            </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body sale={{
                    fifty: "50%OFF",
                    hundred: "100%OFF"
                }} />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading please wait....</h1>}> <About /> </Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    }
                ]
            },
            {
                path: '/dev',
                element: <Dev />
            },
            {
                path: '/mujju',
                element: <Mujju />
            },
            {
                path: '/store/:id',
                element: <StoreDetails />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(ReactComponent())
// root.render(<HeaderComponent />)

root.render(<RouterProvider router={appRouter} />)
