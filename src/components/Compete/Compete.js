import React from 'react'
import Menu from '../Navbar/Menu';
import axios from 'axios';
import useEffect from "react";
import Tiles from "../tiles/Tiles";

let gg;
function getData(tourdata){
    gg = tourdata
}
axios.get("http://localhost:9002/compete").then(res => getData(res.data))
        

const Compete = ({updateUser}) => {
    
        
        console.log(gg)
   

        return (
            <div>
                <div>
                    <Menu updateUser={updateUser}/>
                </div>
                <div>
                
                {
                    gg.map((data, i) => <Tiles cb={data.created_by} noft={data.noft}  key={i}  sys={data.system} tn={data.tourName}/>)
                }

                </div>
            </div>
        )
    }


export default Compete
