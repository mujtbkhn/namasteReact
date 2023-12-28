import { createContext } from "react"

const userContext = createContext({
    user: {
        "name": "Mujtaba",
        "age": 22,
        "email": "mujjukhn538@gmail.com",
    }
})

export default userContext