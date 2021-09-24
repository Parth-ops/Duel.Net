import React from 'react'
import Menu from '../Navbar/Menu';
import axios from 'axios';
import Tiles from "../tiles/Tiles";
import { useState } from 'react';






 
 const Compete = ({updateUser}) => {
    
    const [gg, setgg] = useState([])

    axios.get("http://localhost:9002/compete").then(res => setgg(res.data))
    


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
