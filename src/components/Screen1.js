import React from 'react'
import Screen2 from './Screen2'
import Transition from './shared/Transition'


export default function Screen1(){
    
    return(
        <>
        <div className="hidden">
        <img className="logo" src="../images/logo.png" />
        <h1>ZapRecall</h1>
        <div className="start" onClick={()=>Transition ()}>Iniciar Recall!</div>
        </div>
        </>
    )
}