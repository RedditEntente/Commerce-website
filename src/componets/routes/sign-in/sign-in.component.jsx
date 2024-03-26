import { signInWithGooglePopup , createUserDocumentFromAuth , signInWithGoogleRedirect, auth} from "../../../utils/firebase/firebase.utils"

import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../sign-up-form/authentacation.componet";
function SignIn() {

    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    
    return (
        <div>
            <h1>
                Sign In Page
            </h1>
            <button onClick ={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm></SignUpForm>
            

        </div>
    )
}

export default SignIn