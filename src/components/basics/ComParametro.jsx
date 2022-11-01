import React from "react";
import ReactDOM from "react";

export default function ComParametro(props){
    const status = props.nota >= 7.0 ? 'Aprovado' : 'Reprovado'
    return (
    <div>
        <h2>Nome do aluno: {props.nome}</h2>
        <h3>Nota do aluno: {props.nota}</h3>
        <h3>SItuação Final: {status}</h3>
    </div>)
}