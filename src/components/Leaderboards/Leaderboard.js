import axios from "axios";
import React from "react";
import { useEffect } from "react";
const Leaderboard = ({updateUser}) =>{
    useEffect(()=>{
        axios.post('http://localhost:9002/leaderboard').then(res=>{
            console.log(res.data.content_data)
        })
    }, [])
    return(
        <div>
            
        </div>
    )
}
export default Leaderboard