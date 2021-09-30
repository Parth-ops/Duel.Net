import React, {useState} from 'react'
import "./EditDetails.css" 
import axios from 'axios'


const EditDetails =() => {var myuser = JSON.parse(localStorage.getItem("MyUser"))
     {


    // console.log(myuser)    

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


// const editdetails = () => {
//     const {name,  cpassword, NewEnterPassword} = user
//     if(name  && cpassword && (NewEnterPassword === NewEnterPassword))
//     {
//         axios.post("http://localhost:9002/profile", user)
//         .then(res => {
//             alert(res.data.message)
//         })



//     }

//     else{
//         alert("inavlid entry")
//     }
    
// }
const changeUsername = (e) =>{
    e.preventDefault()
console.log(user)
    if (user.name) 
{

    axios.post("http://localhost:9002/profile", user)
    .then(res => {
        alert(res.data.message)
    })

}
else{

    alert("username empty")
}
}


const changePassword =(e) =>{
e.preventDefault()

}
        return (
            <div className="spidey">
            <form>
                <p>Change your Username</p>
             <div className="display">
                    <div className="abs">
                    <input class ="segg" type="text" name="name" placeholder={"Your current username is " + myuser.name} onChange={handleChange} ></input>
                    <div className="button">
                        <button className="butt" onClick={changeUsername}>Change Username
                            </button>
                    </div>
             </div>
                </div>
                <br/>
                <div className="display">
                <p>Change your password</p>
                    <div className="abs">
                        <input type="password" name="cpassword"  placeholder="Current password" onChange={handleChange}></input>
                    </div>
                        <br/>
                    <div className="abs">    
                        <input type="password" name="NewEnterPassword"  placeholder="New password" onChange={handleChange}></input>
                    </div>    
                        <br/>
                    <div className="abs">    
                        <input type="password" name="NewEnterPassword"  placeholder="Re-enter password" onChange={handleChange}></input>
                    </div>    
                            <div className="pass">
                                < button onClick={changePassword}className="butt">Change password  </button>
                            </div>
                    
                </div>
                <br/>

                <div className="abs">
             
                </div>
                <br/>
                
              
            
            </form>
            </div>
        )
    }
}

export default EditDetails
