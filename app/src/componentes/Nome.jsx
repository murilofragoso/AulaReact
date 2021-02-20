import React from 'react'

export default props =>
    <div>
        <strong>{props.sobrenome}</strong> {props.nome} {props.endereco} {props.numero}
        {props.cidade} {props.estado}
    </div>
    