import React, { useContext } from "react"
import "./checkoutSubtotalDiv.css"
import {cardContext} from "./cardList"

const CheckoutSubtotalDiv=({total})=>{
    const [name,items,key]=useContext(cardContext)

    const [item,setItem]=items
   
    return <>
    <div className="subtototalDiv">
    <h1>Subtotal({item}):Rs {total}</h1>
    <h2>Your order is eligible for FREE Delivery</h2>
    <button>Proceed To Buy</button>
    </div>
    <h1>Shopping Cart</h1>
    <div className="checkoutHeading">
        <h2>Price</h2>
        <h2>quantity</h2>
    </div>
    </>

}


export default CheckoutSubtotalDiv