import React from "react";
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import "./Tiles.css"
 const Tiles = (props)=>{
    return(
        <div className="cerd">
        <h5>Createdby:{props.cb}
        <br/>
        no. of team:{props.noft}
        <br/>
        system:{props.sys}
        <br/>
        title:{props.tn}
        </h5>
        </div>
        

    )






 };
 export default Tiles; 