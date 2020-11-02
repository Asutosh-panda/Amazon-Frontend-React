import React,{useContext} from "react"
import Logo from "./images/Amazon.png"
import "./nav.css"
import NavBox from "./NavBox";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import {cardContext} from "./cardList"
import {Link} from "react-router-dom"



const searchSubmit=(e)=>{
  e.preventDefault()
}

const Nav=()=>{
  const [name,items]=useContext(cardContext)
  const [item,setItem]=items
  
    return  <nav>
              <Link to="/"><img id="amazonImg" src={Logo}  alt="no"></img></Link>
              <NavBox up="hi" down="Choose your Location"/>
              <form onSubmit={searchSubmit}>
                <input type="text" name="search" placeholder="search your thing" style={{color:"black"}}/>
              </form>
              <FlagTwoToneIcon/>
              <NavBox up="Hello,sign in" down="Accounts and list"/>
              <NavBox up="Returns" down="& orders"/>
              <NavBox  up={item} down={<Link to="/checkout"><ShoppingCartTwoToneIcon className="cart"/></Link>}/>

           
            </nav>

          
}
 export default Nav