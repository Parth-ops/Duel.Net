import React from 'react'
import Menu from '../Navbar/Menu';
import axios from 'axios';
import useEffect from "react";

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
                <ul>
                { }
            </ul>
                </div>
            </div>
        )
    }


export default Compete
