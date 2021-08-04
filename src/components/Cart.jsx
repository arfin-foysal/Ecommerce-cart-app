import React, { createContext, useReducer,useEffect} from "react";
import './Cart.css'
import {products} from './Products'
import ContextCart from "./ContextCart";
import Reducer from "./Reducer";
export const Cartcontext = createContext()
const initialState={
    item :products,
    totalAmount:0,
    totalItems:0
} 


const Cart = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    // items delete function
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",
        payload:id
    })}
    
    //clear cart 
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART" })}
   
        //product increment

        const increment=(id)=>{
            dispatch({
                type:"INCREMENT",
                payload:id
            })
        }
        //product decrement
        const decrement=(id)=>{
            dispatch({
                type:"DECREMENT",
                payload:id
            })
        }
    // total update data
    useEffect(() => {
    dispatch({type:"GET_TOTAL"})
    
    }, [state.item])
        

    return (
        <Cartcontext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
          <ContextCart/>
        </Cartcontext.Provider>
     
    )
}

export default Cart

