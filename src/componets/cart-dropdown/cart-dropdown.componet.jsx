
import { CartContext } from "../../contexts/cart.context"
import CartItem from "../cart-item/cart-item.componet"
import { useNavigate } from "react-router-dom"
import Button from "../button/button.componet"

import "./cart-dropdown.styles.scss"
import { useContext } from "react"

const CartDropdown = () => {
    const { cartItems  } = useContext(CartContext);
    const navigate = useNavigate();

    function goToCheckoutHandler(){
        navigate('/checkout')
    }
    return(
        <div className="cart-dropdown-container">
            <div className = "cart-items">
                {cartItems.map(item => <CartItem key = {item.id} cartItem={item}/>)}
            </div>
            
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </div>
    )
}


export default CartDropdown