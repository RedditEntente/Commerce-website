
import "./checkout.styles.scss"

import CheckOutItem from "../../checkout-item/checkout-item.componet";

import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";
import PaymentForm from "../../payment-form/payment.form.componet";

function Checkout() {
    const { cartItems, cartTotal } = useContext(CartContext);


    return (



        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>

                </div>
                <div className="header-block">
                    <span>Description</span>

                </div>
                <div className="header-block">
                    <span>Quantity</span>

                </div>
                <div className="header-block">
                    <span>Price</span>

                </div>
                <div className="header-block">
                    <span>Remove</span>

                </div>
            </div>
            {cartItems.map((item) => {

                return (
                    <CheckOutItem key={item.id} cartItem={item}></CheckOutItem>
                );
            })}









            <span className="total">Total: {cartTotal} </span>
            <PaymentForm></PaymentForm>
        </div>
    );
}

export default Checkout