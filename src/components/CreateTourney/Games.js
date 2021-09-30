import React from 'react'
import Card from "../card/cardUI";
import valo from "./assets/Valo.jpg"
import Menu from '../Navbar/Menu';


const Games = ({updateUser}) => {
    var game = ""
   
        return (
            
            <div>

            <div>
            </div>

                <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card link="http://localhost:3000/create-brack-valo" imgsrc={valo} title="Valorant" des="A tactical 5v5 shooter with precise gunplay" btn="Let's Create!" />
                    </div>
                    <div className="col-md-4">
                        <Card link="http://localhost:3000/manage-t" imgsrc={valo} title="Manage Your Tournaments" des="Customize your tournament settings (ADMIN)" btn="Manage" />
                    </div>
                    <div className="col-md-4">
                        <Card link="http://localhost:3000/tour-status" imgsrc={valo} title="Tournament Status" des="View live status of on-going tournaments" btn="View Status" />
                    </div>
                </div>
            </div>
            </div>
        )
    }


export default Games
