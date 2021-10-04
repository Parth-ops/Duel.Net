import React, { Component } from 'react'
import { Bracket, RoundProps } from 'react-brackets';
import Menu from '../Navbar/Menu';
import { useLocation} from 'react-router';



var data1 = {"_id":{"$oid":"61435702779302e12967ccd4"},
"created_by":"Parth","system":"KO","noft":"8",
"tourName":"Berlin","desp":"70000","game":"Valorant",
"teams":[{"TeamName":"Sentinels","pid1":"Shazam","pid2":"Tenz","pid3":"Sick","pid4":"Zombs","pid5":"Dapr"}],"__v":0}




// console.log((Math.log(parseInt(data2.noft))/Math.log(2)))





  // {
  //   title: 'Round '+String(1),
  //   seeds: [
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
  //     {
  //       id: 5,
  //       teams: [{ name: '100T'}, { name: 'Team D' }],
  //     },
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
  //     {
  //       id: 5,
  //       teams: [{ name: '100T'}, { name: 'Team D' }],
  //     },
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
  //     {
  //       id: 5,
  //       teams: [{ name: '100T'}, { name: 'Team D' }],
  //     },
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
  //     {
  //       id: 5,
  //       teams: [{ name: '100T'}, { name: 'Team D' }],
  //     },
      
  //   ]
  // },
  // {
  //   title: 'Round two',
  //   seeds: [
  //     {
  //       id: 5,
  //       date: new Date().toDateString(),
  //       teams: [{ name: 'SEN' }, { name: '100T' }],
  //     },
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
  //     {
  //       id: 5,
  //       teams: [{ name: '100T'}, { name: 'Team D' }],
  //     },
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
    
     
  //   ],
  // },
  // {
  //   title: 'Round two',
  //   seeds: [
  //     {
  //       id: 5,
  //       date: new Date().toDateString(),
  //       teams: [{ name: 'SEN' }, { name: '100T' }],
  //     },
  //     {
  //       id: 5,
        
  //       teams: [{ name: 'SEN' }, { name: 'Team C' }],
  //     },
    
    
     
  //   ],
  // },
// ];





  const ManageTour =({updateUser}) => {
  const location = useLocation();
  var data2 = location.state.prop
  let teamarr = location.state.teamarr
  
  console.log(data2)
  
  function setData(){
    let data = []
    let dbdata=[]
    let rno = 1
    let seed=[]
    var lim =parseInt(data2.noft)
    var j=(lim/2)
    for(var i=0; i<(Math.log(lim)/Math.log(2)); i++)
    {
      
      for(j ; j>=1; j=j/2)
      { 
          console.log(j)
          for(var k=0; k<j;k++)
          {
            if(j===lim/2){
              seed.push({id:1, teams:[{name:teamarr[k][0]}, {name:teamarr[k][1]}]})
              
            }
            if(j===lim/4)
            {
              seed.push({id:2, teams:[{name:""}, {name:""}]})
            
          }
          if(j===lim/8)
          {
            seed.push({id:3, teams:[{name:""}, {name:""}]})
          }

          if(j===lim/16)
          {
            seed.push({id:4, teams:[{name:""}, {name:""}]})
          }
        }
          data.push({title: "Round "+String(rno) , seeds:seed})
          rno++
          seed = []
      }
      
      
    }
    console.log(i)

    return data;
 }



  const rounds: RoundProps[] = setData()

    return (
      <div>
      <div>
        <Menu updateUser={updateUser}/>
      </div>
      <div>
        <Bracket rounds={rounds} />
      </div>
      </div>
    )
        
        
    }


export default ManageTour