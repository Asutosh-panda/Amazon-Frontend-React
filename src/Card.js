import React, { useState, useContext } from "react" 
import "./card.css"
import {cardContext} from "./cardList"
import Product from "./Product"


   
const Card=()=>{
    const [name,items]=useContext(cardContext)
    const [cardArray,setCardArray]=name
    
 
    return <>
     <div className="mainCardContainer">
        <div className="firstRow">
         <Product name={cardArray[0].name} desc={cardArray[0].desc} src={cardArray[0].src} price={cardArray[0].price} keyId={cardArray[0].key}/>
         <Product name={cardArray[1].name} desc={cardArray[1].desc} src={cardArray[1].src} price={cardArray[1].price} keyId={cardArray[1].key}/>
         </div> 
         <div className="secondRow">
         <Product name={cardArray[6].name} desc={cardArray[6].desc} src={cardArray[6].src} price={cardArray[6].price} keyId={cardArray[6].key}/>
         </div> 
         <div className="thirdRow">
         <Product name={cardArray[2].name} desc={cardArray[2].desc} src={cardArray[2].src} price={cardArray[2].price} keyId={cardArray[2].key}/>
         <Product name={cardArray[3].name} desc={cardArray[3].desc} src={cardArray[3].src} price={cardArray[3].price} keyId={cardArray[3].key}/>
         <Product name={cardArray[4].name} desc={cardArray[4].desc} src={cardArray[4].src} price={cardArray[4].price} keyId={cardArray[4].key}/>
         </div>    
    </div>
 
    </>
}


export default Card;