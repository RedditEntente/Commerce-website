import { createContext,  useEffect, useReducer} from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});
export const USER_ACTION_TYPES ={
    SET_CURRENT_USER: "SET_CURRENT_USER"
}
function userReducer(state, action){
    const {type, payload} = action;
    console.log(action)


    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
    
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);


    }
}
const INITIAL_STATE = {
    currentUser: null
}

export function UserProvider({ children }) {
    
    
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    
    const {currentUser} = state
    function setCurrentUser (user){
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }
    const value = { currentUser, setCurrentUser};
    

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){   
                createUserDocumentFromAuth(user);
            
        }
        setCurrentUser(user);


        });
        return unsubscribe;
    
    }, []);

    
    return <UserContext.Provider value ={value}>{children}</UserContext.Provider>;
}

