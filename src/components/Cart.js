import { useDispatch, useSelector } from "react-redux"
import { StoreCard } from "../cards/StoreCard"
import { clearCart, removeItem } from "../utils/cartSlice"


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const emptyCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1 className="p-5 m-3 text-2xl font-bold text-center text-red-600">Cart</h1>
            <div className="flex flex-col items-center ">
                <button onClick={() => emptyCart()} className="p-3 mx-auto text-white bg-black rounded-xl">Clear Cart</button>
                {cartItems.map((item) => (
                    <StoreCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        sale={item.sale}
                        
                    />
                ))}
                {cartItems.length === 0 && <h1>Your cart is empty!</h1>}
            </div>
        </div>
    )
}

export default Cart