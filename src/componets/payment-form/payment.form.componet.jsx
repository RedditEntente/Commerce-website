import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import Button1 from "../button/button.componet"
import { PaymentFormContainer, FormContainer } from "./paymentform.styles"





function PaymentForm(){
    const stripe = useStripe();
    const elements = useElements();
    async function paymentHandler(e){
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }



    } 
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
            <CardElement>
                
            </CardElement>
            <Button1> Pay now</Button1>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm