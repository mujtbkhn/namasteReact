import { useContext } from "react"
import userContext from "../utils/userContext"

export const Footer = () => {
    const {user} = useContext(userContext)
    return (
        <h1 className="pb-10 text-2xl font-bold">This footer is made by {user.name} - {user.email}</h1>
    )
}