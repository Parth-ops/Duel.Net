import React, { useState } from 'react';
import Menu from '../Navbar/Menu';
import axios from 'axios';


import Tiles from "../tiles/Tiles";






 

  


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
                   
                
                    gg.map((data, i) => <Tiles cb={data.created_by} noft={data.noft}  key={i}  sys={data.system} tn={data.tourName} Ts={data.teams} id={data._id} />)
                }

                </div>
            </div>
        )

            }
    


export default Compete
