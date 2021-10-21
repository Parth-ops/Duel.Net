import React from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <div>
            Payment Successful
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