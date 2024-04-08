

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss"
import PaymentForm from "../payment-form/payment.form.componet";

function CheckOutItem({cartItem}){
    const { name, quantity, price, imageUrl } = cartItem;
    const { clearItemFromCart,  addItemToCart, removeItemToCart} = useContext(CartContext);


    function clearItemHandler(){
        clearItemFromCart(cartItem);
    }
    function addItemHandler(){
        addItemToCart(cartItem);
    }
    function removeItemHandler(){
        removeItemToCart(cartItem);
    }
        
          

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src = {imageUrl} alt = {`${name}`}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={addItemHandler}>
                    &#10095;
                </div>
                </span>
            <span className="price">{price * quantity}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
            
        </div>
    );
};

export default CheckOutItem;