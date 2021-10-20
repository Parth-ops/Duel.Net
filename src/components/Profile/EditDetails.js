import React, {useState} from 'react'
import "./EditDetails.css" 
import axios from 'axios'

import bgvid2 from '../vids/bgvid2.mp4'


const EditDetails =({updateUser}) => {var myuser = JSON.parse(localStorage.getItem("MyUser"))
     {


    console.log(myuser)    

const [ user, setUser] = useState({
    name: "",
    cpassword: "",
    NewEnterPassword:"",
    id: myuser._id
 
})


const handleChange = e =>{
    const {name, value} = e.target
    setUser({
        ...user,
        [name]: value
    })
    console.log(user)
}


const changeUsername = (e) =>{
    e.preventDefault()
console.log(user)
    if (user.name) 
{

    axios.post("http://localhost:9002/profile", {old:myuser, new:user})
    .then(res => {
        alert(res.data.message)
        if(res.data.message)
        {
            updateUser({})
        }
    })

}
else{

    alert("username empty")
}
}


const changePassword =(e) =>{
e.preventDefault()

if (user.NewEnterPassword && user.cpassword) 
{

    axios.post("http://localhost:9002/profile", {old:myuser, new:user})
    .then(res => {
        alert(res.data.message)
        if(res.data.message === "Password changed, logging out...")
        {
            updateUser({})
        }

    })

}
else{

    alert("Password empty")
}
}





        return (
            
           <div className="containerpro">
               
                
                <div className="spidey">
                <div className="wet">
<video autoPlay loop  muted style={{ position: "absolute",
width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-30%)", height:"100%", zIndex:-999
}}  >
  <source src={bgvid2} type="video/mp4" />
</video>
</div>
                <form>
                    <p>Change your Username</p>
                 <div className="display">
                        <div className="abs">
                        <input class ="segg" type="text" name="name" placeholder={"Your current username is " + myuser.name} onChange={handleChange} ></input>
                        </div>
                        <div className="bholder">
                            <button className="butt" onClick={changeUsername}>Change Username
                                </button>
                        </div>
               
                    </div>
                    <br/>
                  
                    <p>Change your password</p>
                    <div className="display">
                        <div className="abs">
                            <input type="password" name="cpassword"  placeholder="Current password" onChange={handleChange}></input>
                            
                     
                            <br/>
                   
                            <input type="password" name="NewEnterPassword"  placeholder="New password" onChange={handleChange}></input>
                        
                            <br/>
                   
                            <input type="password" name="NewEnterPassword"  placeholder="Re-enter password" onChange={handleChange}></input>
                        </div>    
                                <div className="pass">
                                    < button onClick={changePassword}className="butt" >Change password  </button>
                                </div>
                        
                    </div>
                    <br/>
               
                    <div className="abs">
                 
                    </div>
                    <br/>
                    
                  
                
                </form>
                </div>
           </div>
        )
    }
}

export default EditDetails
