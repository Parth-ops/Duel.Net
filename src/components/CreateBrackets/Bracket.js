import React, {useState} from 'react'
import Menu from '../Navbar/Menu';
import axios from "axios"
import './Bracket.css'


const Bracket =  (props,{updateUser}) => {
    var myuser = JSON.parse(localStorage.getItem("MyUser"))
    


    const [ tour, setTour] = useState({
        created_by: "",
        system: "Leag",
        noft: "",
        tourName: "",
        desp: "",
        game: ""
        
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setTour({
            ...tour,
            [name]: value
        })
    }

    const submitData = () => {
        const {created_by, system, noft, tourName, desp, game} = tour

        if(created_by && system && noft && tourName && desp && noft<=32 && game)
        {
            axios.post("http://localhost:9002/create-brack-valo", tour)
            .then(res => {
                alert(res.data.message)
                
            })


        }
        else{
            if(noft>32)
            {
                alert("Max number of teams is 32")
            }
            else
            {
                alert("inavlid entry")
            }
        }
        
    }

        tour.created_by = myuser.name
        tour.game = props.game
        console.log(props.game)
        return (
            <div className="main">
            <div className="brack">
                <Menu updateUser={updateUser}/>
            </div>

            <div>
            {console.log("Created By", myuser)}
                <form >
                    <div className="brack"> 
                    <label for="ex1" >Type of Tournament:</label>
                   
                
                   <select id="ex1" name="system" value={tour.system} onChange={handleChange} className="brack">
                        <option value="Leag">League</option>
                        <option value="KO">Knock-out</option>

                    </select>
                    </div>
                    <br/>
                    <div className="brack">
                        <label for="ex2">No. of Teams</label> 
                        <input className="inputbox" name="noft" id="ex2" type="number" min="2" max="32" value={tour.noft}  onChange={handleChange}>
                        
                        </input>
                    </div>
                    <br/>
                    <div className="brack">
                        <label for="ex3">Name of the Tournament</label>
                        <input className="inputbox" type="text" id="ex3" name="tourName" placeholder="Enter name" onChange={handleChange}></input>
                    </div>
                    <br/>
                    <div className="brack">
                        <label for="ex4">Description of the Tournament</label>
                        <textarea  className="inputbox"rows="5" name="desp" cols="50" id="ex4"  onChange={handleChange} placeholder="Prize Money, Eligibility, etc."></textarea>
                    </div>
                </form>
               <div className="buttonfix"> 
                    <button className="button" onClick={submitData}>Register</button>
               </div>
            </div>
            </div>
        )
    }


export default Bracket
