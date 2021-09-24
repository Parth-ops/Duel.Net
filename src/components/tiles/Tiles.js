import React from "react";
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import "./Tiles.css"
import val from './valo.jpg'
 const Tiles = (props)=>{
    return(
        <div className="cerd">
   
 <div className="bracket">
            <div className="tourimg">
           <img  src={val} />
           </div>
         <div className="text">
                <p>
                Createdby:{props.cb}
                </p>
                <p>
                no. of team:{props.noft}
               </p>
               <p>
                system:{props.sys}
               </p>
               <p>
                title:{props.tn}
                </p>
         </div>
        
 </div>
        </div>
    )



 };
 export default Tiles; 