
import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext} from "react";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg";


import CartIcon from "../../cart-icon/cart-icon.componet";

import { UserContext } from "../../../contexts/user.context";

import CartDropdown from "../../cart-dropdown/cart-dropdown.componet";



import "./navigation.styles.scss";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);


  
  
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
                
            
              {currentUser ? ( <span className="nav-link" onClick={signOutUser}>SignOut</span> ):(
                <Link className="nav-link" to= "/auth">
                    Sign In
                </Link>
              )
            }
            
            
                
                </div>
                <CartIcon></CartIcon>
                <CartDropdown></CartDropdown>
            
          
        </div>
        <Outlet></Outlet>
      </Fragment>
    )
  }
  

  export default Navigation;