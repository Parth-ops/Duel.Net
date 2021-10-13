import React, { useState, useEffect } from 'react'
import "./ManageTour.css";
import { useLocation} from 'react-router';
import axios from 'axios';


let loadData;

function loadR1(data_id)
{
  axios.post("http://localhost:9002/brack-data", data_id).then(res => {
  console.log(res.data)
  loadData = res.data;
    
    
})
}




const ManageTour =({updateUser}) => {
  const location = useLocation();
  var data2 = location.state.prop
  loadR1({id:data2.id, onload:true})

  useEffect(()=>{
     
    
  }, [loadData])

console.log(loadData)


  

  const setbra =( ) =>{
    var daarra=[]
    var i=1
  

    for(i;i<=15;i++){
      let T1=String(i)+'.1'
      // console.log(T1)
  
      
      
       let T2=String(i)+'.2'
      //  console.log(T2)
      
  
     
      let t1=document.getElementById(T1).value
      let t2=document.getElementById(T2).value
      let s1=T1+'s'
      let s2=T2+'s'
      console.log(T1,s1,T2,s2)
      
      let t1s=document.getElementById(s1).value
     
      let t2s=document.getElementById(s2).value
      console.log(t1,t1s,t2,t2s)
      
      let seed={
        t1n:t1,
        t2n:t2,
        t1ss:t1s,
        t2ss:t2s

      }
      daarra.push(seed)
    
     
       
  

    }
    console.log(daarra)
    axios.post("http://localhost:9002/brack-data-update", {id: data2.id, data:daarra, onload:false}).then(res => {
      alert(res.data.message)
      
  })

  }





    return (
      <div class="Bracket">
       <div class="grp1">
         <h4>R1</h4>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed"  id="1.1" /> <input type="text" class="seedscr" id="1.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="1.2"  /> <input type="text" class="seedscr" id="1.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="2.1" /> <input type="text" class="seedscr" id="2.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="2.2"  /> <input type="text" class="seedscr" id="2.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="3.1"/> <input type="text" class="seedscr" id="3.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="3.2" /> <input type="text" class="seedscr" id="3.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="4.1" /> <input type="text" class="seedscr" id="4.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="4.2"  /> <input type="text" class="seedscr" id="4.2s"/>
        
          </div>
                
         
         
      
      
      
      
      </div>
      <div class="grp2">
        <h4>R2</h4>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed"  id="5.1"/> <input type="text" class="seedscr" id="5.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="5.2"  /> <input type="text" class="seedscr" id="5.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="6.1" /> <input type="text" class="seedscr" id="6.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="6.2"  /> <input type="text" class="seedscr" id="6.2s"/>
        
          </div>

        
          </div>
          <div class="grpf">
            
          <div class="ss">
          <h4>SEMI-final 1</h4>
          <input type="text" placeholder="TBD" class="seed" id="7.1" /> <input type="text" class="seedscr" id="7.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="7.2"  /> <input type="text" class="seedscr" id="7.2s"/>
        
          </div> 
           
          <div class="ss">
          <h4 >FINAL</h4> 
          <input type="text" placeholder="TBD" class="seed"  id="8.1"/> <input type="text" class="seedscr" id="8.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="8.2"  /> <input type="text" class="seedscr" id="8.2s"/>
        
          </div>
          
          <div class="ss">
          <h4>SEMI-final 2</h4> 
          <input type="text" placeholder="TBD" class="seed" id="9.1" /> <input type="text" class="seedscr" id="9.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="9.2"  /> <input type="text" class="seedscr" id="9.2s"/>
        
          </div> 


        
          </div>
          <div class="grp3">
          <h4>R2</h4> 
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed"  id="10.1"/> <input type="text" class="seedscr" id="10.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="10.2"  /> <input type="text" class="seedscr" id="10.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="11.1" /> <input type="text" class="seedscr" id="11.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="11.2"  /> <input type="text" class="seedscr" id="11.2s"/>
        
          </div>

        
          </div>
          <div class="grp4">
          <h4>R1</h4> 
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed"  id="12.1"/> <input type="text" class="seedscr" id="12.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="12.2"  /> <input type="text" class="seedscr" id="12.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="13.1" /> <input type="text" class="seedscr" id="13.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="13.2"  /> <input type="text" class="seedscr" id="13.2s"/>
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="14.1"/> <input type="text" class="seedscr" id="14.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="14.2" /> <input type="text" class="seedscr" id="14.2s" />
        
          </div>
          <div class="ss">
          <input type="text" placeholder="TBD" class="seed" id="15.1" /> <input type="text" class="seedscr" id="15.1s"/>
          <br/>
          <input type="text" placeholder="TBD" class="seed" id="15.2" /> <input type="text" class="seedscr" id="15.2s"/>
        
          </div>
          
                
         
         
      
      
      
      
      </div>

                
         
         
      
      
      
      
    

      <footer><button class="bgg" onClick={setbra}>Save</button></footer>
      </div>


    )
        
        
    }


export default ManageTour