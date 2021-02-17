import React from 'react'
import ReactDOM from 'react-dom'
import Componente1 from './componentes/Componente1'
import {CompA, CompB} from './componentes/DoisComponentes'

const element = document.getElementById('root');

ReactDOM.render(
    <div>
        <Componente1 valor="Olá Mundo!" soma={15+64}/>
        <CompA valor="1" />
        <CompB valor="2" />
    </div>
, element)