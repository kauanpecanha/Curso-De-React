import React from 'react'
import alunos from '../../Data/alunos'
import './ListaAlunos.css'
export default props => {
    const li1 = (
        <li>
            {alunos[0].id} ) {alunos[0].nome} {'->'} {alunos[0].nota}
        </li>
    );
    // desta forma acima, pode-se capturar um elemento específico do array recebido.

    const alunosLI = alunos.map(aluno => {
        return (
            <li key = {aluno.id}>
                {aluno.id} ) {aluno.nome} {'->'} {aluno.nota}
            </li>
        )
    })
    // desta forma acima, pode-se capturar todos os elementos do array recepcionado

    return (
        <div className = "List">
            {alunosLI}
        </div>
    )
}