import { useContext, useState } from "react"
import { IMG_URL } from "../../constants"
import Logo from "../assets/img/fashion.png"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import userContext from "../utils/userContext"
import cartImage from "../assets/img/cartImage.png"
import { useSelector } from "react-redux"

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const isOnline = useOnline()

    const { user } = useContext(userContext)

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    return (


        <div className="flex bg-amber-200 justify-evenly">
            <Link to={'/'}><img className="p-3 h-28" src={Logo} /></Link>
            {/* <input style={{ height: "20px", marginTop: "40px" }} placeholder="Search" type="text"></input> */}
            <ul className="flex items-center justify-evenly">
                <li className="mr-5"><Link to={'/'}>Home</Link></li>
                <li className="mr-5"><Link to={'/about'}>About</Link></li>
                <li className="mr-5"><Link to={'/dev'}>Dev</Link></li>
                <li className="mr-5"><Link to={'/mujju'}>Mujju</Link></li>
                <li className="mr-5"><Link to={'/cart'}>cart - ({cartItems.length} items)</Link></li>
            </ul>

            <div className="flex items-center text-3xl">
                {isOnline ? "💡" : "🔴"}
            </div>
            <div className="flex items-center font-bold text-red-700 ">{user.name}</div>
            <div className="px-3 py-1 my-auto text-xl text-white rounded-md bg-emerald-800 ">
                {
                    isLoggedIn ? <button className="" onClick={() => setIsLoggedIn(false)}>LogOut</button> : <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
                }
            </div>
            <img className="flex items-center justify-center w-8 h-8" src={cartImage}  />

        </div>
    )
}
const Header1 = () => {
    return (
        <div className="header" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img style={{ width: "100px" }} src={IMG_URL} />
            <input style={{ height: "20px", marginTop: "40px" }} placeholder="Search" type="text"></input>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>React</li>
                <li>Mujju</li>
            </ul>
        </div>
    )
}


export default Header