import React from 'react'
import Nome from './Nome'

export default props =>
    <div>
        <Nome nome="Murilo" sobrenome={props.sobrenome ?? "Fragoso"}/>
        <Nome nome="Bento" sobrenome={props.sobrenome ?? "Fragoso"}/>
        <Nome nome="Ulisses" sobrenome={props.sobrenome ?? "Fragoso"}/>
        <Nome nome="Vitor" sobrenome={props.sobrenome ?? "Fragoso"}/>
    </div>