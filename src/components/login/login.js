import React, {useState} from "react";
import "./login.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ updateUser}) => {

    const history = useHistory()
    const [showpass, setshow] = useState(false)
    const togglePass = () => setshow(!showpass);
    const showPassword = {
        passStat: showpass ? 'text' : 'password',
      };
    
    const [ user, setUser] = useState({
       
        email: "",
        password: "",
        
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    console.log("ji")

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            history.push("/")
        })
    }


    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your E-mail"></input>
            <input type="password" type={showPassword.passStat} name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
            <img src="hello" onMouseOver={togglePass}  onMouseOut={togglePass}/>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>

        </div>
    )
}
export default Login