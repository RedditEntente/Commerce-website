
import { Outlet, Link } from "react-router-dom";
import { Fragment , useContext} from "react";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import { NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";

import CartIcon from "../../cart-icon/cart-icon.componet";

import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

import CartDropdown from "../../cart-dropdown/cart-dropdown.componet";



import { signOutUser } from "../../../utils/firebase/firebase.utils";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);




  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/home">
          <CrwnLogo className="logo">Logo</CrwnLogo>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/Shop">
            Shop
          </NavLink>


          {currentUser ? (<NavLink as="span" onClick={signOutUser}>SignOut</NavLink>) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}

          <CartIcon></CartIcon>

        </NavLinks>
        {isCartOpen && <CartDropdown></CartDropdown>}


      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
}
  

  export default Navigation;