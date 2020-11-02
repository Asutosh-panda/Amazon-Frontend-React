import React from "react";
import AmazonSlide from "./images/amazonGreatIndianFestival.jpg";


function Slide()
{
    
    return <div className="divSlide" style={{height: "75vh",display: "flex",justifyContent:"center",zIndex:"-4"}}>
        <img src={AmazonSlide} alt="slide"/>
    </div>
}

export default Slide