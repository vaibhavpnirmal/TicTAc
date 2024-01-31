import React from 'react'
import './tictac.css'

import { useState } from 'react'
const Tictac = () => {
    let audio1=new Audio("/audio/pong.mp3")
    let audio2=new Audio("/audio/ping.mp3")
    let winner=new Audio("/audio/winner.mp3")
    let [win,setwin]=useState([0,1,2,3,4,5,6,7,8])
    const [won,setwon]=useState('')
    let [variable,setvariable]=useState('x')

   
    const userwin=()=>{
        if(win[0]===win[1] && win[1]===win[2] && win[0]===win[2]){
            setwon(("The winner is  "+win[0]))
            winner.play();
            
            
           // alert(win[0])
            
            
           
            
          }
          if(win[3]===win[4] && win[4]===win[5] && win[3]===win[5]){
            setwon(("The winner is  "+win[3]))
            
             winner.play(); 
          }
          if(win[6]===win[7] && win[7]===win[8] && win[6]===win[7]){
            setwon(("The winner is  "+win[6]))
             winner.play(); 
          }
          if(win[0]===win[3] && win[3]===win[6] && win[0]===win[6]){
            setwon(("The winner is  "+win[0]))
             winner.play(); 
          }
          if(win[1]===win[4] && win[4]===win[7] && win[7]===win[1]){
            setwon(("The winner is  "+win[1]))
              winner.play();
          }
          if(win[2]===win[5] && win[5]===win[8] && win[8]===win[2]){
            setwon(("The winner is  "+win[2]))
             winner.play();
          }
          if(win[0]===win[4] && win[4]===win[8] && win[8]===win[0]){
            setwon(("The winner is  "+win[0]))
             winner.play(); 
          }
          if(win[2]===win[4] && win[4]===win[6] && win[2]===win[6]){
            setwon(("The winner is "+win[2]))
             winner.play(); 
          }
    }
  
    
    
    const onclick=(e)=>{
      if(e.target.innerHTML==="")
      
      {e.target.innerHTML=variable
        if(variable==='x'){
            audio1.play();
        }else{
            audio2.play();
        }
        let index=e.target.id
        
        win.splice(index,1,variable)
        console.log(win)
        
           variable=variable==='x'? setvariable('o'):setvariable('x')
           userwin();
         
        }
            
        

    }
   
        const handleReload = () => {
            setwin([])
          window.location.reload();
        };
    
  return (<>
  <div className='container'>
  <h1>{won} </h1>
     <div className='box'>

        <div className='row'>
            <button id="0" onClick={onclick}  value=""></button>
            <button id="1" onClick={onclick}  value=""></button>
            <button id="2" onClick={onclick}  value=""></button>
        </div>
        <div className='row'>
            <button id="3" onClick={onclick}  value=""></button>
            <button id="4"  onClick={onclick}  value=""></button>
            <button id="5" onClick={onclick}  value=""></button>
        </div>
          <div className='row'>
            <button id="6" onClick={onclick}  value=""></button>
            <button id ="7" onClick={onclick}  value=""></button>
            <button id="8"  onClick={onclick}  value=""></button>
        </div>
      
    </div>
    
        
        

        <button onClick={handleReload} style={{width:"100%"}}>Reset</button>
        
        
    
    
    
    </div></>
    

    
   

  )
}

export default Tictac
