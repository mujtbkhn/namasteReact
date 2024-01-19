import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

export const StoreCard = (props) => {

    // const item = { image, title, category, price, sale, description, rating };
    // console.log(item);

    const { user } = useContext(userContext)

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { id } = useParams();

    const shouldDisplayButton = id ? true : false

    const addToCart = () => {
        dispatch(addItem(props))
    }


    // title = title.length > 30 ? title.slice(0, 30) + "..." : title
    return (
        <div data-testid="storecards" className="border-solid border-2 border-sky-500 w-[350] h-[450] rounded-lg px-3 py-2 my-20 shadow-lg hover:shadow-xl flex flex-col justify-center items-center	">
            <img className="flex items-center justify-center w-52 max-h-64" src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <h4>{props.category}</h4>
            <h3>{`${props.price}`}</h3>
            <h2>{props.price > 100 ? (props.sale && props.sale.fifty) : (props.sale && props.sale.hundred)}</h2>
            {/* <h3>{user.name}{"_"}{user.email}</h3> */}
            {(
                <>
                    <button className="px-4 py-2 m-2 text-white bg-red-700 rounded-xl" onClick={(e) => {
                        e.preventDefault()
                        addToCart()
                    }}>
                        Add to cart
                    </button>
                    <button className="px-4 py-2 m-2 text-white bg-red-700 rounded-xl" onClick={(e) => {
                        e.preventDefault()
                        dispatch(removeItem({ id: props.id }))
                    }} >
                        Remove from cart
                    </button>
                </>
            )}
        </div>
    )
}
export const ShimmerStoreCard = () => {
    return (
        <div className="card">
            <img src="" alt="" />
            <h1>{ }</h1>
            <h4>{ }</h4>
            <h3>{ }</h3>
        </div>
    )
}
