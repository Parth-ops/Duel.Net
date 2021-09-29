import React, { Component } from 'react'
import { Bracket, RoundProps } from 'react-brackets';
import Menu from '../Navbar/Menu';


var data1 = {"_id":{"$oid":"61435702779302e12967ccd4"},
"created_by":"Parth","system":"KO","noft":"4",
"tourName":"Berlin","desp":"70000","game":"Valorant",
"teams":[{"TeamName":"Sentinels","pid1":"Shazam","pid2":"Tenz","pid3":"Sick","pid4":"Zombs","pid5":"Dapr"}],"__v":0}

var data2 = {"_id":{"$oid":"61435702779302e12967ccd4"},
"created_by":"Parth","system":"KO","noft":"8",
"tourName":"Berlin","desp":"70000","game":"Valorant",
"teams":[{"TeamName":"100T","pid1":"Shazam","pid2":"Tenz","pid3":"Sick","pid4":"Zombs","pid5":"Dapr"}, 
         {"TeamName":"SEN","pid1":"Shazam","pid2":"Tenz","pid3":"Sick","pid4":"Zombs","pid5":"Dapr"}, 
         {"TeamName":"ENVY","pid1":"Shazam","pid2":"Tenz","pid3":"Sick","pid4":"Zombs","pid5":"Dapr"},
         {"TeamName":"GMB","pid1":"Shazam","pid2":"Tenz","pid3":"Sick","pid4":"Zombs","pid5":"Dapr"}],
         "__v":0}


// console.log((Math.log(parseInt(data2.noft))/Math.log(2)))

function setData(){
    let data = []
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
          seed.push({id:1, teams:[{name:"SEN"}, {name:"100T"}]})
          }
          data.push({title: "Round "+String(i+1), seeds:seed})
          seed = []
      }
      
      
    }
    console.log(data)

    return data;
 }


const rounds: RoundProps[] = setData()
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





 const ManageTour =({updateUser}, data) => {
    return (
      <div>
      <div>
        <Menu updateUser={updateUser}/>
      </div>
      <div>
        <Bracket rounds={rounds} />;
      </div>
      </div>
    )
        
        
    }


export default ManageTour