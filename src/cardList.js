import React, { useState,createContext, useContext } from "react";

import Logo1 from "./images/amazonLaptop.png"
import Logo2 from "./images/amazonPhones.jpg"
import Logo3 from "./images/amazonHeadphone.png"
import Logo4 from "./images/amazonShoe.png"
import Logo5 from "./images/amazonEcho.jpg"
import Logo6 from "./images/amazonEcho1.png"
import Logo7 from "./images/amazonJuicer.png"

export const cardContext=createContext()

export const CardList=(props)=>{

    const [cardArray,setCardArray]=useState([
        {
            name:"Acer Aspire 6.5",
            price:40000,
            desc:"4GB RAM 1TB HDD + 512 SSD | RYZEN 7",
            src:Logo1,
            key:1

        },
        {
            name:"Smart Phones",
            price:9999,
            desc:"See more  for Exicting Offers",
            src:Logo2,
            key:2

        },
        {
            name:"JBL Headphones",
            price:4000,
            desc:"Inbuilt microphone | noise cancellation | 2 year warranty",
            src:Logo3,
            key:"3"

        },
        {
            name:"Nike shoes",
            price:899,
            desc:"Best DEAL",
            src:Logo4,
            key:4

        },
        {
            name:"Echo setup",
            price:1500,
            desc:"2 year warranty | Best Deal | Black",
            src:Logo5,
            key:5

        },
        {
            name:"Echo setup Prime",
            price:2000,
            desc:"2 year warranty | Best Deal | White",
            src:Logo6,
            key:6

        },
        {
            name:"USHA Mixer",
            price: 4000,
            desc:"1 year warranty",
            src:Logo7,
            key:7

        },


    ])

    const [items,setItems]=useState(0)
    const [productkey,setKey]=useState("")
    
    return <>
       <cardContext.Provider value={[[cardArray,setCardArray],[items,setItems],[productkey,setKey]]}>
          {props.children}
       </cardContext.Provider>
      </>

}