import { useState } from "react";
import "./Vidas.css";

const VIDA = new Map <number,string>(
    [
        [0,"🖤🖤🖤🖤🖤"],
        [1,"💙🖤🖤🖤🖤"],
        [2,"💙💙🖤🖤🖤"],
        [3,"💙💙💙🖤🖤"],
        [4,"💙💙💙💙🖤"],
        [5,"💙💙💙💙💙"]
    ]
);

export default function Vida(){
    const[vida,setVida]=useState(0);

    function toLive(){
        if(vida===5){
            setVida(0);
        }
        else{
            console.log(`toLive()!" ${vida}`);
            setVida(vida+1);
        }
    }
    return(
        <div className="vidas">
        <div className="vida">{VIDA.get(vida)}</div>
        <div className="acoes">
            <button onClick={toLive}>Viva</button>
        </div>
        </div>
    )
}