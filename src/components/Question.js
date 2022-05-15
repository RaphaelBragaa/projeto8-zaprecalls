import React from 'react'

export default function Question (props){
     const [telinha1, setTelinha1] = React.useState("question margint")
     const [telinha2, setTelinha2] = React.useState("hidden")
     const [miniButton, setMiniButton] = React.useState("hidden")
     const [setinha, setSetinha] = React.useState("iconMax yellow")


    function Clicado1(elemento){
      
            if(elemento !== null){
                setTelinha1("hidden")
                setTelinha2("questionMax yellow margint")
            }
            
        }

    function Clicado2(elemento){
        if(elemento !== null){
            setSetinha("hidden")
            setMiniButton("miniButton")
        }
    }
    return(
        <>
        <div className={telinha1}>
        <h3 className="marginl">Pergunta {props.num}</h3>
        <img className="icon marginr" onClick={() => Clicado1(this)} src="../images/Vector.svg" />
        </div>
        <div className={telinha2}>
         MAGINABA!!
         <div className={miniButton + " marginlB1 red"}><div className='red'>Não lembrei</div></div>
         <div className={miniButton + " orange"}><div className='orange marginl'>Quase não lembrei</div></div>
         <div className={miniButton + " green"}><div className='green'>ZAP!</div></div>
         <img onClick={() => Clicado2(this)} className={setinha} src='../images/setinha.png'/>
        </div>
        </>

    )
}
//<div className="questionMax yellow margint">
//<img className="iconMax yellow" src='../images/setinha.png'/>
//("miniButton")
    