import React from "react";
import axios from 'axios'
import './Pricing.scss'
import bgvid4 from '../vids/bgvid4.mp4'
import { GiCrownCoin } from "react-icons/gi";

const Pricing =() =>{
return(

<div>
<div className="wet">
<video autoPlay loop  muted style={{ position: "absolute",
width:"100%",left:"50%", objectFit:"cover",transform: "translate(-50%,-20%)", height:"100%",zIndex:-1
}}  >
  <source src={bgvid4} type="video/mp4" />
</video>
</div>
<div class="promos">  
    <div class="promo first">
        <h4>Basic</h4>
        <ul class="features">
            <li class="brief">Basic membership</li>
            <li class="price"> 200 <GiCrownCoin/> </li>
            <li>One time investment</li>
            <li>Basic Analysis</li>
            <li>Allows to host 5 tournaments </li>
            <li class="buy"><button>Register</button></li>   
        </ul>
    </div>
    <div class="promo second">
        <h4>Plus</h4>
        <ul class="features">
            <li class="brief">Plus membership</li>
            <li class="price">500 <GiCrownCoin/></li>
            <li>Detailed analysis</li>
            <li>Allows to host 10 tournaments </li>
            <li>Cheap and Efficient</li> 
            <li class="buy"><button>Register</button></li>  
        </ul>
    </div>
    <div class="promo third scale">
        <h4>Premium</h4>
        <ul class="features">
            <li class="brief">Best deal for recurring user</li>
            <li class="price">950 <GiCrownCoin/></li>
            <li>Visual analytics per player</li>
            <li>Unlimited Tournaments</li>
            <li>And more...</li>  
            <li class="buy"><button>Register</button></li> 
        </ul>
    </div>  
</div>
</div>

)



}
export default Pricing