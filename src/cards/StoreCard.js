import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

export const StoreCard = ({ image, title, category, price, sale }) => {

    const item = { image, title, category, price, sale };

    const { user } = useContext(userContext)

    const dispatch = useDispatch()

    const navigate = useNavigate();
    const { id } = useParams();

    const shouldDisplayButton = id ? true : false

    const itemWithId = { ...item, id };

    const addToCart = (item) => {
        dispatch(addItem(item))
    }
    const removeFromCart = (item) => {
        if (item.id === id) {
            dispatch(removeItem(item))
        }
    }
    console.log();



    title = title.length > 30 ? title.slice(0, 30) + "..." : title
    return (
        <div className="border-solid border-2 border-sky-500 w-[350] h-[450] rounded-lg px-3 py-2 my-20 shadow-lg hover:shadow-xl flex flex-col justify-center items-center	">
            <img className="flex items-center justify-center w-52 max-h-64" src={image} alt={title} />
            <h1>{title}</h1>
            <h4>{category}</h4>
            <h3>{`${price}`}</h3>
            <h2>{price > 100 ? (sale && sale.fifty) : (sale && sale.hundred)}</h2>
            {/* <h3>{user.name}{"_"}{user.email}</h3> */}
            {shouldDisplayButton && (
                <>
                    <button className="px-4 py-2 m-2 text-white bg-red-700 rounded-xl" onClick={() => addToCart(itemWithId)}>
                        Add to cart
                    </button>
                    <button className="px-4 py-2 m-2 text-white bg-red-700 rounded-xl" onClick={() => removeFromCart(itemWithId)}>
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
