import React from "react";

const Quadrant=(props)=>{
    

    return(
        <button onClick={props.onClick}> {props.value} </button>
    )
}

export default Quadrant;