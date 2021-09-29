import React, { useState } from 'react';
import Menu from '../Navbar/Menu';
import axios from 'axios';


import Tiles from "../tiles/Tiles";







 

  


const Megt = ({updateUser}) => {
    var myuser = JSON.parse(localStorage.getItem("MyUser"))
    const p=JSON.stringify({username: myuser.name})
  
    

    const [gg, setgg] = useState([])

    axios.get("http://localhost:9002/manage-t",{params:p}).then(res => setgg(res.data))
    


    
    
        
        
    

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
    


export default Megt