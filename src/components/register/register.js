import React, {useState, useEffect} from "react";
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom";
import eyecon from "./eyecon.png"
import { MdVisibility } from "react-icons/md";
import swal from "sweetalert";

const Register = () => {

    const history = useHistory()
    
    const [showpass, setshow] = useState(false)
    const togglePass = () => setshow(!showpass);
    const showPassword = {
        passStat: showpass ? 'text' : 'password',
      };
   


    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        dcoins: "0",
        paystatus:false,
        reEnterPassword: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    function validateEmail(email) 
    {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePass(pass) 
    {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        return re.test(pass);
    }

    

    const register = () => {
        const {name, email, password, dcoins, paystatus, reEnterPassword} = user
        if(name && email && password && dcoins && (password === reEnterPassword))
        {
            if(validateEmail(email))
            {
                if(validatePass(password))
                {
            
                axios.post("http://localhost:9002/register", user)
                .then(res => {
                    swal(res.data.message)
                    history.push("/login")
                })
             }
             else{
                 swal("Enter a valid Password!",{
                     icon:"error"
                 })
             }
            }
            else{
                swal("Enter a valid E-mail ID",{
                    icon:"error"
                })
            }
        }
        else{
            swal("inavlid entry",{
                icon:'error'
            })
        }
        
    }
  
   
   
      console.log()
    return (
    <div className="register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your User-Name" onChange={handleChange} ></input>
        <input type="text" name="email" value={user.email} placeholder="Your E-mail" onChange={handleChange}></input>
        <div className="redhot">
            <input id="pass" className="inputr" type={showPassword.passStat} name="password" value={user.password} placeholder="Your password"  onChange={handleChange} ></input>
            < MdVisibility onMouseOver={togglePass}  onMouseOut={togglePass}/>
        </div>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/login")}>Login</div>

    </div>
    )
}
export default Register