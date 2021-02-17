import React from 'react'
import ReactDOM from 'react-dom'
import Componente1 from './componentes/Componente1'
import {CompA, CompB} from './componentes/DoisComponentes'
import {Teste1, Teste2, Teste3} from './componentes/Multielementos'
import FamiliaFragoso from './componentes/FamiliaFragoso'
import Familia from './componentes/Familia'
import Nome from './componentes/Nome'

const element = document.getElementById('root');

ReactDOM.render(
    <>
        <Componente1 valor="Olá Mundo!" soma={15+64}/>
        <CompA valor="1" />
        <CompB valor="2" />
        <Teste1/>
        <Teste2/>
        <Teste3/>
        <FamiliaFragoso/>
        <Familia>
            <Nome nome = "Joao" sobrenome="Silva"/>
            <Nome nome = "Leandro" sobrenome="Silva"/>
        </Familia>
        <Familia>
            <Nome nome = "Pedro" sobrenome="Afonso"/>
            <Nome nome = "Maria" sobrenome="Afonso"/>
        </Familia>
        <h1>Familia Souza Pereira</h1>
        <FamiliaFragoso sobrenome="Souza Pereira"/>
    </>
, element)