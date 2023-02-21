import React from "react";
import swap from "../img/swap.swg";
export default function Swap(){
    return(
        <button className="btn__swap">
            <img className="img-swap" src={swap}/>
        </button>
    )
}