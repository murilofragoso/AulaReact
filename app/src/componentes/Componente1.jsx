import React from 'react'

var vf = false;

function func1(props) {
    return (
        <div>
            <h1>{props.valor}</h1>
            <h2>{props.soma}</h2>
            <p>{2+2}</p>
            <p>Verdadeiro ou falso? {vf ? 'Verdadeiro' : 'Falso'}</p>
            <p>{Math.random()}</p>
        </div>
    )
}

export default func1;