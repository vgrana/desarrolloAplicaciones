import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';
import Productos from "./componentes/Productos"
=======
import EntityList from './components/EntityList'
import './App.css';
>>>>>>> 8de800ad411fc7d05c72e1806be84eef2f2c8c14

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
<<<<<<< HEAD
          <Productos titulo="Estos son mis productos" />
=======
          Edit <code>src/App.js</code> and save to reload.
          <EntityList entity="clientes" />
>>>>>>> 8de800ad411fc7d05c72e1806be84eef2f2c8c14
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
