import React from "react";
import Quadrant from "./Quadrant";
import { Fragment } from "react";

const Gameboard=(props)=>{

    const data  = Array.from(props.board);

    return(
        <div className='Gameboard'>
            {data.map((Value,i)=>{
                return(
                    <Quadrant className="box" key={i} value={Value} onClick={()=>props.insertValue(i) }></Quadrant>
                    

                ) 
               

            })}
            
       
         </div>
        
        


    )
}

export default Gameboard;