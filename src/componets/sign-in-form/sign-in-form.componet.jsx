import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.componet";
import Button from "../button/button.componet";

import "./sign-in-form.styles.scss"


const defaultFormFields = {
    
    email: "",
    password: "",
    

};



function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();






    function resetFormFields() {
        setFormFields(defaultFormFields);

    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const user = await signInAuthUserWithEmailAndPassword(email, password);


            resetFormFields();
            navigate("/home")


        } catch (error) {
            console.log(error);
            if (error.code === "auth/invalid-credential") {
                alert("incorrect password or email");
            }

        }
    }


    async function signInWithGoogle() {
        await signInWithGooglePopup();


    }





    function handleChange(event) {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    }


    return (
        <div className="sign-in-container">
            <h2>Allready have an account?</h2>
            <span>Sign in with email and password!</span>
            <form onSubmit={handleSubmit}>






                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}></FormInput>




                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>






                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>


                    <Button type="button" buttonType={"google"} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>

        </div>
    );
}


export default SignInForm