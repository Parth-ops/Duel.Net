import React, {useState} from 'react'
import Menu from '../Navbar/Menu';
import axios from "axios"
import './Bracket.css'
import bbg from './bracketbg.png'
import bgvid3 from '../vids/bgvid3.mp4'



const Bracket =  (props,{updateUser}) => {
    var myuser = JSON.parse(localStorage.getItem("MyUser"))
    


    const [ tour, setTour] = useState({
        created_by: "",
        user_id: myuser._id,
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
        const {created_by, user_id, system, noft, tourName, desp, game} = tour

        if(created_by && user_id && system && noft && tourName && desp && noft<=32 && game)
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
        tour.user_id = myuser._id
        console.log(myuser._id)
        tour.game = props.game
        console.log(props.game)
        return (
            <div className="mcont">
            <div className="cont1">
                    
                    <img className="bbg" src={bbg} />
                
            </div>
          



           <div className="well">
                <div className="main1">
                <div className="brack">
                </div>
                <div>
                {console.log("Created By", myuser)}
                    <form >
                        <div className="brack"> 
                        <label for="ex1" >Type of Tournament:</label>
                       
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                       <select className="inputboxb" id="ex1" name="system" value={tour.system} onChange={handleChange} className="brack">
                            <option value="Knock-Out">Knock-out</option>
               
                        </select>
                        </div>
                        <br/>
                        <div className="brack">
                            <label for="ex2">No. of Teams</label> 
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                          
                            <select className="inputboxb" name="noft" id="ex2" type="number" value={tour.noft}  onChange={handleChange}>
                            <option value="2">2 Teams</option>
                            <option value="4">4 Teams</option>
                            <option value="8">8 Teams</option>
                            <option value="16">16 Teams</option>
                            </select>
                      
                        </div>
                        <br/>
                        <div className="brack">
                            <label for="ex3">Name of the Tournament</label>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            <input className="inputboxb" type="text" id="ex3" name="tourName" placeholder="   Enter name" onChange={handleChange}></input>
                        </div>
                        <br/>
                        <div className="brack">
                            <label for="ex4">Description of the Tournament</label>
                            <textarea  className="inputboxb"rows="5" name="desp" cols="30" id="ex4"  onChange={handleChange} placeholder="    Prize Money, Eligibility, etc."></textarea>
                        </div>
                    </form>
                   <div className="buttonfix"> 
                        <button className="button" onClick={submitData}>Register</button>
                   </div>
                </div>
                </div>
      </div>
      </div>
        )
    }


export default Bracket
