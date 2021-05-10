import React from "react";

const Quadrant=(props)=>{
    

    return(
        <button style={{color: "red", fontSize:"5em"}} onClick={props.onClick}> {props.value} </button>
    )
}

export default Quadrant;