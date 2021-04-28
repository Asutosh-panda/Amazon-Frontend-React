import React, { useEffect,useContext } from "react"
import Logo4 from "./images/amazonShoe.png"
import "./checkoutProductList.css"
import {cardContext} from "./cardList"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';





const CheckoutProductList=({name,desc,price,src,quantity,keys})=>{
   
 
   const [ar,items,keyp]=useContext(cardContext)
    const [item,setItem]=items
    const [productKey,setKey]=keyp
    if(item==0)
    {
        document.querySelector(".checkoutHeading").style.visibility="hidden"
    }
  
    const delFun=(e)=>{
     let idb=e.target.id
     let ind=productKey.indexOf(idb)
         if(quantity>1)
         {
         setKey(productKey.filter((value,index)=>index!=ind))
         setItem(item-1)
         }
         else{
             
              let classProduct=document.querySelector(`.product${keys}`);
              classProduct.classList.add("animateClass")
              setTimeout(()=>{
              classProduct.classList.remove("animateClass")
              setKey(productKey.filter((value,index)=>index!=ind))
              setItem(item-1)  
          },1400)
            
         }
       
    }
    const AddFun=(e)=>{
     let idb=e.target.id
    
     setKey(prev=>[...prev,idb])
     setItem(item+1)
   
}


    return <>
           <div className={`product${keys}`}>
         <div className="checkoutProduct">
         <img src={src} alt="logo" style={{height:"18vmin"}}/>
         <div className="details">
         <h2>{name}</h2>
         <h4>{desc}</h4>
         </div>
         <h2 id="priceCheckoutList">RS.{price}</h2> 
         <div className="addDelete">
         <Button style={{color:"red"}}><button style={{fontSize:"1.5"}} id={keys} onClick={delFun}>-</button></Button>
         <h3 style={{padding:"15px"}}>{quantity} </h3>
      <Button style={{color:"green"}}> <button  id={keys} onClick={AddFun}>+</button></Button>
         </div>
         </div>
       
    </div>
    </> 

}

export default CheckoutProductList 