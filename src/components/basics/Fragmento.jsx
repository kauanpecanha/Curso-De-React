import React from "react"

export default function ComParametro(props){
    const status = Math.ceil(props.nota) >= 7.0 ? 'Aprovado' : 'Reprovado'
    const NotaInt = Math.ceil(props.nota)
    return (
    <>
        <h2>Nome do aluno: {props.nome}</h2>
        <h3>Nota do aluno: {NotaInt}</h3>
        <h3>SItuação Final: {status}</h3>
    </>)
}