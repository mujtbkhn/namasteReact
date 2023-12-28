import { useRouteError } from "react-router-dom"

export const Error = () => {

    const err = useRouteError()
    return (
        <>
            <h1>encountered an error!!!</h1>
            <h1>Error {err.status + " : " + err.statusText}</h1>
            <h1> You filthy developer write some neat code </h1>
        </>
    )
}