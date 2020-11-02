import React from "react";
import "./navBox.css"

const NavBox=({up,down})=>{
    return <div className="boxDiv">
        <h3>{up}</h3>
        <h5>{down}</h5>
    </div>
}
export default NavBox