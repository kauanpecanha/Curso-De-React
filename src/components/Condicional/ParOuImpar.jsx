import React from 'react'

export default props => {
    const analysis = props.number%2 === 0
    return(
        <div>
            {analysis ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}