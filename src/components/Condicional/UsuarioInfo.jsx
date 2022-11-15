import React from 'react'
import If from '../Condicional/If'

export default props => {
    const usuario = props.usuario || {}
    return(
        <div>
            <If test = {usuario && usuario.nome}>
                Seja bem vindo, <strong>{usuario.nome}</strong>
            </If>
        </div>
    )
}