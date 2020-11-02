import React,{createContext, useContext, useEffect, useState} from "react";
import "./product.css"
import {cardContext} from "./cardList"


const Product=({name,desc,src,price,keyId})=>{
    const [ar,items,key]=useContext(cardContext)
    const [item,setItem]=items
    const [productKey,setKey]=key
    const clickFunction=(e)=>{
        let idBtn=e.target.id
        
        setKey(prev=>{return [...prev,idBtn]})
        
        var cart=document.querySelector(".cart");
        var s=1.1;
        var interval=setInterval(fn,10);
        setItem(item+1)
        function fn()
        {
           
            cart.style.transform=`scale(${s})`
            if(s>1 && s<1.5)
            {  
              s=s+0.1;
             
            }
            else if(s=1.5)
            {
                clearInterval(interval)
            }
        }
        var interval1=setInterval(fn1,100);
        function fn1()
        {
            cart.style.transform=`scale(${s})`
            if(s>1.1)
            {  
              s=s-0.1;
             
            }
            else if(s=1)
            {
                clearInterval(interval1)
            }
        }
        
    }
    useEffect(()=>{
       

})
    return <div className="productDiv">
                 <h1>{name}</h1>
                 <p>{desc}</p>
                 <img src={src} alt="" style={{height:"15vh"}}/>
                 <h2>Rs.{price}</h2>
                 <button id={keyId} onClick={clickFunction}>Add to Cart</button>
            </div>
    
}


export default Product