import { useState } from "react";

export default function Contador(props) {
    const[valor,setValor] = useState(0); //hook useState, 0 é o valor inicial do estado.
    function incrementar(){
        setValor(valor+1);
    }

    function decrementar(){
        if(valor>0)
            setValor(valor-1);
    }

    return (
        <div>
            <div className="visor">
                <h1>{valor}</h1>
            </div>
            <div className="botoes">
                <button onClick={()=>{incrementar()}} >+</button>
                <button onClick={()=>{decrementar()}}>-</button>
            </div>
        </div>
    );
}