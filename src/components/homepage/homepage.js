import React from "react";
// import "./homepage.css"
import Card from "../card/cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../Navbar/Menu.js";

const Homepage = ({updateUser}) => {


    return (
        <div className="homepage">
            <div>
                <Menu updateUser={updateUser}/>
            </div>
            <div>
                <Card />
            </div>
           
        </div>
        
    )
    
}
export default Homepage