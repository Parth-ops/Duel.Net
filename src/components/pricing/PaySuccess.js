import React from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import bgvid5 from '../vids/bgvid5.mp4'
import { useState, useEffect } from 'react';
import "./pays.css"

const PaySuccess = ()=>{

    let myuser = JSON.parse(localStorage.getItem("MyUser"))
    const [isLoaded, setLoaded] = useState(false)
    const [isSuccess, setSuccess] = useState(false)

    useEffect(()=>{
        paymentUpdate()
    }, [])

    function paymentUpdate()
    {
        axios.post("http://localhost:9002/success", myuser).then(
            res=>{
                    if(res.data.message === "failed")
                    {
                        setLoaded(true)
                    }
                    else{
                        setLoaded(true)
                        setSuccess(true)
                    }
            }
        )
    }

    if(isLoaded && isSuccess)
    {
    return(

        <div className="mcontainer">
          
        <div className="wet">
    <video autoPlay muted style={{ position: "absolute",
    width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-16%)", height:"55%"
    }}  >
      <source src={bgvid5} type="video/mp4" />
    </video>
    </div>

    <div className="bthome">
<a  href="http://localhost:3000/"className="record">Back to Home page</a>
</div>      
        </div>
    )
    }
    else if(isLoaded && !isSuccess)
    {
        return(
            <div>
                Oops! We are facing some issues :(
            </div>
        )
    }
    else{
        return(
            <div>
                Processing
            </div>
        )
    }
}

export default PaySuccess