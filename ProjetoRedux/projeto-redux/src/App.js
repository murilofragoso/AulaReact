import './App.css';
import React from 'react';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Projeto Redux</h1>

      <div className="linha">
        <Card red title="Vermelho">
          Cartão 1
        </Card>
      </div>

      <div className="linha">
        <Card green title="Verde">
          Cartão 2
        </Card>
        <Card blue title="Azul">
          Cartão 3
        </Card>
        <Card purple title="Roxo">
          Cartão 4
        </Card>
      </div>
    </div>
  );
}

export default App;
