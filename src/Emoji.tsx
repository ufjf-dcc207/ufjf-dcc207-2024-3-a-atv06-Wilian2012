import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

const EMOJIS = new Map<string, string>([

["happy","😂"],
["sick", "😭"],
["dead","💀"],

]);

export default  function Emoji (){

     const [situacao, setSituacao]= useState("happy");

    function toHappy(){
        console.log("toHappy()!");
        setSituacao( "happy");
        //
    }

    function toDead(){

        console.log("toDead()!");
        setSituacao( "dead");
    }

    function toSick(){

        console.log("toSick()!");
        setSituacao("sick");
    }

    function toTodos(){
 
        
    switch(situacao){

        case "haapy":
        setSituacao("sick");
        break;

        case "sick":  
        setSituacao( "dead");
        break;

        case "dead":
        setSituacao( "happy");
        break;
      
         default:
            setSituacao("happy");
            break;
   
    }
    }
    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao)|| "🤨" }</div>
            <div className="atributos"><Atributo icone ="❤️" /></div>
            <div className="acoes">
                <button onClick={toDead}>MOrto</button>
                <button onClick={toHappy}>Vivo</button>
                <button onClick={toSick}>Chorao</button>
                <button onClick={toTodos}>todos</button>
            </div>
            </div>
    );
}