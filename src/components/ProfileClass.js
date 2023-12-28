import React from "react";
import {log} from "console";

class Profile extends React.Component {

    constructor(props) {
        super(props);

        //creating a state
        this.state = {

            userInfo: {
                name: "Dummy",
                location: "dummy"
            }
        }
        console.log("Child - constructor" + this.props.name);

    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/mujtbkhn");
        const json = await data.json()
        log(json)
        this.setState({
            userInfo: json,
        })

        
        this.timer =   setInterval(() => {
            console.log("Hi");
        }, 1000);


        console.log("Child - Component Did Mount" + this.props.name);
    }
    componentDidUpdate(){
        log("component did update")
     
    }
    componentWillUnmount(){
        log("component will unmount")
        clearInterval(this.timer)
    }
    render() {
        const { count } = this.state
        console.log("Child - render" + this.props.name);
        return (
            <>
                <h1>This is Profile Class Based Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Public Repos: {this.state.userInfo.public_repos}</h2>
            </>
        )
    }
}

export default Profile

/**
 * CONSTRUCTOR
 * RENDER
 * API CALL
 * JSON
 * COMPONENT DID MOUNT
 * RE RENDER(UPDATE)
 * COMPONENT DID UPDATE(this is called after every update(re-render))
 * 
 * gone to a new page 
 * 
 * COMPONENT WILL UNMOUNT
 */