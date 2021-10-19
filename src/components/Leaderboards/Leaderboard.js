import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
const Leaderboard = ({updateUser}) =>{
    const[Rp,setRP]=useState({})
    const [loading,setloading ]=useState(true)
    useEffect(()=>{
        ff()
   
    
   
    }, [])
    console.log(Rp)

 
function ff() { 
    axios.post('http://localhost:9002/leaderboard').then(res=>{
        console.log(res.data.content_data)
        setRP(res.data.content_data.players)
        setloading(false)
         
        
         
    })
}
   if(loading){
       return(
           <h1> loading....</h1>
       )
   }

   
    return(

       
        
            <div>
             
                


            <h1 className="t"> Top 100 Ranked NA</h1>

            <div className="sbox" >
            <ul>
            
                   {Rp.map(function(t, index){
                    return( <li key={ index } className="mind"> <h2>{index+1}</h2> 
                    <pre>UserName: {t.gameName}</pre> 
                    <pre>Ranked Rating:{t.rankedRating}  </pre>
                    <pre>No. of wins:{t.numberOfWins}  </pre>
                     
                 
                    
                    
                    
                    </li>)
                  })}
                </ul>
                </div>
            
        </div>
        
    )
}
export default Leaderboard