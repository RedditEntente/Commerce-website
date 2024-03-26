import SignInForm from "../sign-in_form/sign-in-form.componet";
import SignUpForm from "../sign-up-form/sign-up-form.componet";

import "./authentication.scss"
function Authentication(){
    return(
    <div className="authentication-container">
    <SignInForm></SignInForm>


    <SignUpForm></SignUpForm>
    </div>
    );
};


export default Authentication;