import React, { useState,useEffect, } from "react";
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import "./ManageTiles.css"
import val from './valo.jpg';
import { useHistory } from "react-router-dom";


 const ManageTiles = (props,{updateUser})=>{
       const history = useHistory()
       

       const updateTour=()=>{
              
              history.push('/custom-t',props)
              
    
          
            } 

 

       // useEffect(() => {
       //        setd(JSON.parse(localStorage.getItem("tdata")))
       //      }, [])
       
        
    return(
           <div>
                  <div>
                  <Menu updateUser={updateUser}/>
                  </div>
        <div className="cerd ">
              
   
 <div className="bracket"  >
            <div className="tourimg">
           <img className="timage" src={val} />
           </div>
         <div className="text">
               <p>
                Tournament Name:{props.tn}
                </p>
                <p>
                Created by:{props.cb}
                </p>
                <p>
                No. of teams:{props.noft}
               </p>
               <p>
                System:{props.sys}
               </p>
                <p>
                  Slots Available:{props.noft - props.Ts.length}
                </p>     
                <button  onClick={updateTour}> Manage </button>
         </div>


        
 </div>

        </div>
        </div>
    )



 };
 export default ManageTiles; 