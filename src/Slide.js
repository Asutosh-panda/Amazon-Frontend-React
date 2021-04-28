import React from "react";
import AmazonSlide from "./images/amazonGreatIndianFestival.jpg";


function Slide()
{
    
    return <div className="divSlide" style={{height: "auto",minWidth:"100%",display: "flex",justifyContent:"center",zIndex:"-4"}}>
        <img src={AmazonSlide} alt="slide" style={{width:"100%",height:"22vmax"}}/>
    </div>
}

export default Slide