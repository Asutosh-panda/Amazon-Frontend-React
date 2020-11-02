import React, { useContext } from "react"
import {cardContext} from "./cardList"
import CheckoutProductList from "./CheckoutProductList"

import CheckoutSubtotalDiv from "./CheckoutSubtotalDiv"


const CheckoutProduct=()=>{
    
const [ar,items,pkey]=useContext(cardContext)
const [cardArray,setcardArray]=ar
const [productKey,setKey]=pkey
// productKey.sort()
let total=0;
let productKeyUnique=Array.from(new Set(productKey))
// const mapar1=productKey.map(value=>[...mapar1,value])
// console.log(mapar1)



const mapar=cardArray.map(value=>{
    try{
    return productKeyUnique.map(val=>{
        let quantity=0
        productKey.map(v=>{if(v==val){quantity++}})
        if(value.key==val)
        {
        let p=value.price*quantity
        total=total+p
        return <CheckoutProductList name={value.name} desc={value.desc} price={value.price} src={value.src} quantity={quantity} keys={value.key}/>
        
        }
    })
}
catch{}
})

    return <>  <CheckoutSubtotalDiv total={total}/>
    {mapar}
    </>
}


export default CheckoutProduct