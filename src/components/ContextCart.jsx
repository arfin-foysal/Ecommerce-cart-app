import React, { useContext } from 'react'
import Items from './Items'
import { Cartcontext } from './Cart'
const ContextCart = () => {
    const  {item,clearCart,totalAmount,totalItems} = useContext(Cartcontext)
    if (item.length===0){
        return (
            <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="" className="arrow-icon" />
                    <h3>continue-shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="" />
                    <p>7</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">0</span> items in Shopping Cart</p>
                </section>
            </>
        )
    }
   
    return (
        <>
         <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="" className="arrow-icon" />
                    <h3>continue-shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="" />
                    <p>{totalItems}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItems}</span> items in Shopping Cart</p>
                <div className="cart-items">
                    <div className="cart-items-container">
                        {item.map(currItem => <Items key={currItem.id} {...currItem}/>)}
                   
                    </div>
                </div>
                <div className="card-total" >
                    <h3>Cart total : <span>{totalAmount}$</span></h3>
                    <button>Checkout</button>
                 <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
        </>
    )
}

export default ContextCart

