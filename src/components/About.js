import { Outlet } from "react-router-dom"
import ProfileFunc from "./Profile"
import Profile from "./ProfileClass"
import React from "react"
import userContext from "../utils/userContext"


class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent - constructor");
    }
    componentDidMount() {
        console.log("Parent - component Did Mount");
    }
    render() {
        console.log("Parent - render");
        return (
            <div>

                <h1>This is about</h1>
                <userContext.Consumer>
                    {({ user }) => <h2 className="p-5 text-xl font-bold">This is {user.name} - {user.email}</h2>}
                </userContext.Consumer>
                <Profile name={"FirstChild"} />
                {/* <Profile name={"SecondChild"}/> */}
            </div>
        )
    }
}

export default About