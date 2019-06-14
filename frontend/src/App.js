import React from 'react';
import logo from './logo.svg';
import './App.css';
import Productos from "./componentes/Productos"
import Clientes from "./componentes/Clientes"

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Productos titulo="Estos son mis productos" />
        
        </p>
        <p>
          <Clientes titulo= "Estos son mis clientes"/>
        </p>
        <a
          className="App-link"
          href="https://vgrana.github.io/vale-grandi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi curriculum!!
        </a>
      </header>
    </div>
  );
}

export default App;
