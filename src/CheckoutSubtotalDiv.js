import React, { useContext } from "react"
import "./checkoutSubtotalDiv.css"
import {cardContext} from "./cardList"

const CheckoutSubtotalDiv=({total})=>{
    const [name,items,key]=useContext(cardContext)

    const [item,setItem]=items
   
    return <>
    <div className="subtototalDiv">
    <h1 style={{fontSize:"7vmin"}}>Subtotal({item}):Rs {total}</h1>
    <h2 style={{fontSize:"2vmax",textAlign:"center"}}>Your order is eligible for FREE Delivery</h2>
    <button>Proceed To Buy</button>
    </div>
    <h1 style={{marginBottom:"5vh",fontSize:"7vmin",marginTop:"5vh"}}>Shopping Cart</h1>
    {/* <div className="checkoutHeading">
        <h2>Price</h2>
        <h2>quantity</h2>
    </div> */}
    </>

}


export default CheckoutSubtotalDiv