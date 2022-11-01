import React from 'react'
import './ListaProdutos.css'
import produtos from '../../Data/produtos'

export default props => {
    
    function getLinhas(){
        return produtos.map(produto => {
            return (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border = '1'>
                <thead>
                    <th>Id</th>
                    <th>Nome do Produto</th>
                    <th>Preço do Produto</th>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}