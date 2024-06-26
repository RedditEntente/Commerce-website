import { useState} from "react";
import { useNavigate } from "react-router";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.componet";
import Button from "../button/button.componet";
import "./sign-up-form.styles.scss"



const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",

};



function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const history = useNavigate();








    function resetFormFields() {
        setFormFields(defaultFormFields);

    }
    async function handleSubmit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            history('/shop');

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email Allready in use!");


            }
            else {
                console.log("user creation encountered an error", error);
            }



        }



    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    }


    return (
        <div>

            <h2>Don't have an account?</h2>
            <span>Sign up with email and password!</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}></FormInput>




                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}></FormInput>




                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>




                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}></FormInput>


                <Button type="submit" >Sign Up</Button>

            </form>


        </div>

    );

}


export default SignUpForm