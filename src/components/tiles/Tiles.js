import React, { useState,useEffect, } from "react";
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import "./Tiles.css"
import val from './valo.jpg';
import { useHistory } from "react-router-dom";


 const Tiles = (props)=>{
       const history = useHistory()
       

       const updateT=()=>{
              const deezp= props
              history.push('/Regt',props)
              
          
          
          
            }     


     

     

 

       // useEffect(() => {
       //        setd(JSON.parse(localStorage.getItem("tdata")))
       //      }, [])
       
        
    return(
        <div className="cerd ">
   
 <div className="bracket"  >
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
                <button  onClick={updateT}  > reg</button>
         </div>


        
 </div>

        </div>
    )



 };
 export default Tiles; 