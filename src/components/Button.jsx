/* eslint-disable react/prop-types */
import React from "react";

export default function Button(props){
    const { children} = props
    return(
        <button type="submit" className='btn-search'>{children}</button>
    )
}