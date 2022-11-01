import React from "react";
import ReactDOM from 'react-dom'

export default (props) => {
    const min = props.numero1
    const max = props.numero2
    const rand = parseInt(Math.random() * (max - min)) + min

    return(
        <div>    
            <h2>Valor Aleatório</h2>
            <p>
                Valor Mínimo: {min}
            </p>
            <p>
                Valor Máximo: {max}
            </p>
            <p>
                Valor Escolhido: {rand}
            </p>
        </div>
    )
}