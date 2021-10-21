import React from 'react'
import Card from "../card/cardUI";
import valo from "./assets/Valo.jpg"
import bgvid3 from '../vids/bgvid3.mp4'
import { GiCrownCoin } from "react-icons/gi";

const Games = ({updateUser}) => {
  
   
        return (
            
            <div>

            <div>
            </div>
            <div className="wet">
<video autoPlay loop  muted style={{ position: "absolute",
width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-20%)", height:"100%"
}}  >
  <source src={bgvid3} type="video/mp4" />
</video>
</div>
                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card link="http://localhost:3000/create-brack-valo" imgsrc={valo} title="Valorant" des="A tactical 5v5 shooter with precise gunplay (200 D-coins)" btn="Let's Create!" />
                       
                    </div>
                    <div className="col-md-4">
                        <Card link="http://localhost:3000/manage-t" imgsrc={valo} title="Manage Tournaments" des="Customize your tournament details (ADMIN)" btn="Manage" />
                    </div>
                    <div className="col-md-4">
                        <Card link="http://localhost:3000/manage-g" imgsrc={valo} title="Tournament Status" des="View status of on-going tournaments (Brackets and Teams )" btn="View Status" />
                    </div>
                </div>
            </div>
            </div>
        )
    }


export default Games
