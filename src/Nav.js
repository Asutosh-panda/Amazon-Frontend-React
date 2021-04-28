import React,{useContext} from "react"
import Logo from "./images/Amazon.png"
import "./nav.css"
import NavBox from "./NavBox";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import {cardContext} from "./cardList"
import {Link} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';



const searchSubmit=(e)=>{
  e.preventDefault()
}

const Nav=()=>{
  const [name,items]=useContext(cardContext)
  const [item,setItem]=items
window.onload=function()
{
  let burgerClass=document.querySelector(".burger");
  let navSlide=document.querySelector(".navSlide");
let home=document.querySelector(".blackMenu");
let cart = document.querySelector(".cart")
  let flag=false
  burgerClass.addEventListener("click",()=>{
    if(!flag)
    {
      burgerClass.classList.add("open")
      flag=true
      window.onscroll = function () { window.scrollTo(0, 0); };
      navSlide.style.visibility="visible"
      navSlide.style.width="60vw"
      navSlide.style.opacity="1"
      try{
      home.style.opacity="0.4"
      home.style.zIndex="1"   
    }
      
      catch{
      
      }
    }
    else{
      window.onscroll=function(){};
      burgerClass.classList.remove("open")
      flag=false
      navSlide.style.visibility="hidden"
      navSlide.style.width="0vw"
      navSlide.style.opacity="0"
      try{
      home.style.opacity="0"
      home.style.zIndex="-10"
    }
      catch{
   }
    }
  })

  try{
  home.addEventListener("click",()=>{
    if(flag)
    {
      window.onscroll=function(){};
      burgerClass.classList.remove("open")
      flag=false
      home.style.opacity="0"
      home.style.zIndex="-10"
      navSlide.style.visibility="hidden"
      navSlide.style.width="0vw"
      navSlide.style.opacity="0"
    }
  })
}
catch{}
  cart.addEventListener("click",()=>{
    if(flag)
    {
      burgerClass.classList.remove("open")
      window.onscroll=function(){};
      flag=false
      try{
        home.style.opacity="0"
        home.style.zIndex="-10"
      }
      catch{}
      navSlide.style.visibility="hidden"
      navSlide.style.width="0vw"
      navSlide.style.opacity="0"
    }
  })
}





    return <div className="totalDiv">
            <nav >
             <div className="burger">
               <div className="burger1"></div>
               <div className="burger2"></div>
               <div className="burger3"></div>
             </div>
              <Link to="/AmazonClone-React"><img id="amazonImg" src={Logo}  alt="no"></img></Link>
              <NavBox up="hi" down="Your Location"/>
              <div className="search">
              <SearchIcon/>
              <form onSubmit={searchSubmit}>
                <input type="text" name="search" placeholder="search your thing" style={{color:"black"}}/>
              </form>
              </div>
              <FlagTwoToneIcon id="flag"/>
              <NavBox  up="Hello,sign in" down="Accounts and list"/>
              <NavBox  up="Returns" down="& orders"/>
              <div className="cartItems">
              <h3>{item} </h3>
              <Link to="/checkout"><ShoppingCartTwoToneIcon className="cart"/></Link>
              </div>
            </nav>
            <div className="navSlide" >
            <div className="user" style={{backgroundColor:"#232f3e",display:"flex",alignItems:"center",padding:"4px"}}>
            <PersonIcon style={{backgroundColor:"grey",fontSize:"3rem",}}/>
            <h3 style={{color:"white"}}>Hello,sign up</h3>
            </div>
            <hr style={{backgroundColor:"grey",height:"1px"}}/>
            <a href="#">Home</a>
              <a href="#">Shop by Category</a>
                <a href="#">Today's Deals</a>
                <hr style={{backgroundColor:"grey",height:"1px"}}/>
               <a href="#">Your Orders</a>
               <a href="#">buy Again</a>
               <a href="#">Your Wish List</a>
               <a href="#">Amazon Pay</a>
               <a href="#">Try Prime</a>
               <a href="#">Sell on Amazon</a>
               <a href="#">Programs and Features</a>
               <hr style={{backgroundColor:"grey",height:"1px"}}/>
               <a href="#">Language</a>
               <a href="#">Your Noifications</a>
               <a href="#">Settings</a>
               <a href="#">Customer Service</a>
             </div>
            </div>

          
}
 export default Nav