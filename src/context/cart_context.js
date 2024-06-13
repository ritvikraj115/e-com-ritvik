import React, { createContext, useContext, useReducer } from 'react'
import reducer from "../reducer/CartReducer.js";

const CartContext = createContext();
const initialState = {
    // cart: [],
    cart:[],
    total_item: 0,
    total_price: 0,
    shipping_fee: 50000,
  };

const CartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id,amount, product } });
    
  };
  const removeFromCart=(id)=>{
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  }
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart
      }}>
      {children}
      {console.log(state)}
    </CartContext.Provider>
  );  
    }      

  const useCartContext = () => {
    return useContext(CartContext);
  };  

export {CartProvider,useCartContext}