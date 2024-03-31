import { createContext, useState, useEffect} from 'react';


function addCartItem(cartItems, productToAdd) {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);


    if(existingCartItem){
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id 
        ?{...cartItem, quantity: cartItem.quantity + 1}
            : cartItem

        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];

}
function removeCartItem(cartItems,productToRemove){
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
  if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  return cartItems.map((cartItem) => 
        cartItem.id === productToRemove.id
        ?{...cartItem, quantity: cartItem.quantity -1}
            : cartItem
  );


}

function clearCartItem(cartItems, productToClear){
  
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id)
 

}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: function(){},
  removeItemToCart: function(){},
  clearItemFromCart: function(){},
  cartCount: 0,
  cartTotal: 0,
});

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);


  }, [cartItems]);


  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);



  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));

  };

  function removeItemToCart(productToRemove) {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }


  function clearItemFromCart(productToClear) {
    setCartItems(clearCartItem(cartItems, productToClear));
  }
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}