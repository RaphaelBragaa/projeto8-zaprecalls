import React from 'react'
import Question from "./Question"
import Transition from './shared/Transition'


export default function Screen2(props){
    
      return( 
     <>
        <div className="tela2">
        <div className="fachada">
       <img className="sublogo" src="../images/logo.png" />
       <h1>ZapRecall</h1>
       </div>

       <Question num={1}/>  
       
       <Question num={2}/>

       <Question num={3}/>

       <Question num={4}/>

       <Question num={5}/>

       <Question num={6}/>

       <Question num={7}/>

       <Question num={8}/>
       </div>
    </>
    )
}
