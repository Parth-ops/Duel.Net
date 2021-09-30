import React, { useState,useEffect, } from "react";
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";
import "./ManageTiles.css"
import val from './valo.jpg';
import { useHistory } from "react-router-dom";
import axios from "axios";


 const ManageTiles = (props,{updateUser})=>{
        var dd={
               id:props.id,
               hh:props.tn
        }

       const history = useHistory()
       const DelTour=()=>{

              if (window.confirm('confirm to delete tournament '+ props.tn)){
                     axios.post("http://localhost:9002/deltour",dd).then(res => {
                            alert(res.data.message)
                            
                        })


                   
    
                     }
              else{
                     
             }
              return('hi')
       }

       const updateTour=()=>{
              
              history.push('/custom-t',props)
              
    
          
            } 

 

       // useEffect(() => {
       //        setd(JSON.parse(localStorage.getItem("tdata")))
       //      }, [])
       
        
    return(
           <div>
                  <div>
              
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
                <button  onClick={updateTour}> Manage </button> <button id='del'  onClick={DelTour}> Delete </button> 
         </div>


        
 </div>

        </div>
        </div>
    )



 };
 export default ManageTiles; 