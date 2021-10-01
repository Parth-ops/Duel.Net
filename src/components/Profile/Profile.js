import React, { Component } from 'react'
import { useState } from 'react'
import EditDetails from './EditDetails'



const Profile= ({updateUser})=>{ var myuser = JSON.parse(localStorage.getItem("MyUser"))


   {
    const [isOpened, setIsOpened] = useState(false);
  
    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
    }
 
        return (
            
            <div>
                
                
                {!isOpened && 
               (
                <div>
               <h1> Hi {myuser.name} </h1>
               <button onClick={toggle} > Want to edit acc details?</button>
               </div>
               
               )

                }
             
             <div>
             {isOpened && (<EditDetails updateUser= { updateUser}/>)}
             </div>
            </div>
        )
    
}
}


export default Profile
 