import React from 'react'

const Teste1 = (props) => 
    <div>
        <h1>Olá div do teste 1 no h1</h1>
        <h2>Olá div do teste 1 no h2</h2>
    </div>

const Teste2 = (props) => 
    <>
        <h1>Olá fragment do teste 2 no h1</h1>
        <h2>Olá fragment do teste 2 no h2</h2>
    </>    

const Teste3 = (props) => 
    [
        <h1>Olá array do teste 3 no h1</h1>,
        <h2>Olá array do teste 3 no h2</h2>
    ]

export {Teste1, Teste2, Teste3}