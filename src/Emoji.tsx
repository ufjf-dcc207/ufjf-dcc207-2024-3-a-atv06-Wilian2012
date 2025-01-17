
import "./Emoji.css";
import Atributo from "./Atributo";
import { useState } from "react";


const EMOJIS = new Map <string,string>(
    [
        ["happy", "🙂"],
        ["sick", "🤢"],
        ["dead", "😵"],
        ["sad", "😞"]
    ]
);

export default function Emoji(){
    const[situacao, setSituacao] = useState("happy");
    
    const[saude, setSaude] = useState(4);
    const[energia, setEnergia] = useState(3);
    const[comida, setComida] = useState(2);
    const[agua, setAgua] = useState(1);
    const[luz, setLuz] = useState(true);

    
    

    function onAlimentar(){
        setComida(Math.min(comida+1,5));
    }

    function onHidratar(){
        setAgua(Math.min(agua+1,5));
    }

    function onLigaDesligaLuz(){
        setLuz(!luz);
    }

    function onCiclo(){

        if(saude ===0){
            console.log("todead()!")
            setSituacao("dead");
            return;
        }

        if(!luz && agua >0 && comida >0){

            setSaude(Saude=>Math.min(5,Saude+1));
        }

        setComida(Math.max(0,comida-1));
        setAgua(Math.max(0,agua-1));
        if(luz){
            setEnergia(Math.max(0,energia-1));
        }else{
            setEnergia(Math.min(5,energia+1));
        }
        if(comida===0){
            setSaude(prevSaude=>Math.max(0,prevSaude-1));
        }
        if(agua===0){
            setSaude(prevSaude=>Math.max(0,prevSaude-1));
        }

          
        if(energia <=2  ){

            setSituacao("sad");
        }
        if(saude <= 2){

            setSituacao("sick");
        }

    

        
       
     

        
    }

      

    return(
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
            <div className="atributo">
                <Atributo icone ="💙" valor={saude}/>
                <Atributo icone ="⚡" valor={energia}/>
                <Atributo icone ="🍖" valor={comida}/>
                <Atributo icone ="💧" valor={agua}/>
                
            </div>
            <div className="acoes">
                <button onClick={onAlimentar}>Dar comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigaDesligaLuz}>
                    <span style={{filter:luz?"":"grayscale(100%)"}}>💡</span>
                    {luz?"Apagar":"Acender"} a luz</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    )       
}
