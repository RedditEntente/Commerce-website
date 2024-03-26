
import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext} from "react";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";

import "./navigation.styles.scss";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);


  const signOutHandler = async () =>{
    const res = await signOutUser(); 
    setCurrentUser(null);
  }
  
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
            <CrwnLogo className = "logo">Logo</CrwnLogo>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to= "/Shop">
                    Shop
                </Link>
                
            
              {currentUser ? ( <span className="nav-link" onClick={signOutHandler}>SignOut</span> ):(
                <Link className="nav-link" to= "/auth">
                    Sign In
                </Link>
              )
            }

                </div>
            
          
        </div>
        <Outlet></Outlet>
      </Fragment>
    )
  }
  

  export default Navigation;