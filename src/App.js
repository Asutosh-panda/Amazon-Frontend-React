import React from "react"
import Home from "./Home"
import {Switch,Route,Link} from "react-router-dom"
import CheckoutPage from "./CheckoutPage"
import { CardList } from "./cardList"
import Nav from "./Nav"



const App=()=>{

    return<>
    <CardList>
           <Nav/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route  exact path="/checkout" component={CheckoutPage}/>
          </Switch>
          </CardList>
          </>
}


export default App;