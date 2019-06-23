import React from 'react';

import EntityList from './components/EntityList'
import HomeComponent from './components/HomeComponent'
import BarraHerramientas from './components/BarraHerramientas'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import Formulario from './components/Formulario'

import './App.css';


function FormularioComponent(){
  return (<Formulario elFormulario= "formulario"/>)
}

function ClientesComponent(){
  return (<EntityList entity="clientes"/>)
}
function ProductosComponent(){
  return (<EntityList entity="productos"/>)
}
function BarraComponent(){
  return (<BarraHerramientas barra="barraHerramientas"
          
  />)
}
function App() {
  return (
    <div className="container">
    <Router>
        <header className="App-header">
      
         <div>
			  <nav  class="navbar navbar-default navbar-fixed-top navbar-custom App">
         <div class="navbar-header">
   		    <a href="/" class="btn btn-info" role="button">Home</a>
       		<a href="/clientes" class="btn btn-info" role="button">Clientes</a> 
       		<a href="/productos" class="btn btn-info" role="button">Productos</a> 
       	</div>
       		</nav>
       </div>
              {/* <nav  >
       <BarraHerramientas nombreBoton="Home"></BarraHerramientas>
         <BarraHerramientas nombreBoton="Clientes">
            
         </BarraHerramientas>
         <BarraHerramientas nombreBoton="Productos"></BarraHerramientas>  */}

         <Formulario></Formulario>
       </header>     
      <main className="App">
        <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/clientes"  component={ClientesComponent} />
            <Route path="/productos" component={ProductosComponent} />
            <Route path="/barraHerramientas" component={BarraComponent}/>
            <Route path="/formulario" component={FormularioComponent}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}



export default App;

  

