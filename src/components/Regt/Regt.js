import React, { useState } from 'react';
import { useLocation} from 'react-router';
import axios from 'axios';
import Menu from '../Navbar/Menu';
console.log("hi")
const Regt=({updateUser}) =>{

    
    const location = useLocation();
    console.log(location.state)
    const [ setT, setTT] = useState({
        TeamName: "",
        pid1: "",
        pid2: "",
        pid3: "",
        pid4: "",
        pid5: "",
        cid :location.state.id,
        noft:location.state.noft
        
    })
     const handleChange= e =>{
        const {name, value} = e.target
        setTT({
            ...setT,
            [name]: value
        })
        console.log(setT)


     }
     const Hansub=(e)=>{
        e.preventDefault();
         const{TeamName,pid1,pid2,pid3,pid4,pid5,cid }=setT
        if(TeamName&&pid1&&pid2&&pid3&&pid4&&pid5){
            axios.post("http://localhost:9002/Regt", setT)
            .then(res => {
                alert(res.data.message)
                
            })
        
             
        }
        else{
            alert("empty")
        }


     }
     
    return(
        <div>
            <div>
                <Menu updateUser={updateUser}/>
            </div>
        
        <form>
        <br/>
        <div className="Team">
            <label for="tn">Please enter your Team name</label>
            <input className="inputbox" type="text" id="TeamName" name="TeamName" placeholder="Entern Team name" onChange={handleChange}></input>
        </div>
        <br/>
        <div className="Team">
            <label for="pid1">Player 1</label>
            <input className="inputbox" type="text" id="pid1" name="pid1" placeholder=" Username-#abcd" onChange={handleChange}></input>
        </div>
        <div className="Team">
            <label for="pid2">Player 2</label>
            <input className="inputbox" type="text" id="pid2" name="pid2" placeholder=" Username-#abcd" onChange={handleChange}></input>
        </div>
        <div className="Team">
            <label for="pid3">Player 3</label>
            <input className="inputbox" type="text" id="pid3" name="pid3" placeholder=" Username-#abcd" onChange={handleChange}></input>
        </div>
        <div className="Team">
            <label for="pid4">Player 4</label>
            <input className="inputbox" type="text" id="pid4" name="pid4" placeholder=" Username-#abcd" onChange={handleChange}></input>
        </div>

        <div className="Team">
            <label for="pid5">Player 5</label>
            <input className="inputbox" type="text" id="pid5" name="pid5" placeholder=" Username-#abcd" onChange={handleChange}></input>
        </div>
        <button onClick={Hansub}>Confirm </button>
    </form>
    </div>

    )


}
export default Regt