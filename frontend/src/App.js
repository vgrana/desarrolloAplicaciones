import React from 'react';

import EntityList from './components/EntityList'
import HomeComponent from './components/HomeComponent'
import BarraHerramientas from './components/BarraHerramientas'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
import FormularioCliente from './components/FormularioCliente'
import FormularioProducto from './components/FormularioProducto'


import './App.css';

function ClientesComponent(){
  var lista 
  return [
    <FormularioCliente actualizarLista={() => lista.actualizarLista()} />, 
    <EntityList entity="clientes" ref={(self) => lista = self}/>
    // usamos ref para que el valor de lista se inicialize cuando la EntityList
    // sea renderizada
  ]
}
function ProductosComponent(){ 
  var lista
  return [
       <FormularioProducto actualizarLista = {()=>lista.actualizarLista()}/>,
      <EntityList entity ="productos" ref = {(self) => lista = self}/>
  ]
 
}
function BarraComponent(){
  return (<BarraHerramientas barra="barraHerramientas" />)
 
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
      </header>     
      <main className="App">
        <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/clientes"  component={ClientesComponent} />
            <Route path="/productos" component={ProductosComponent} />
            <Route path="/barraHerramientas" component={BarraComponent}/>
            <Route path="/formularioCliente" component={ClientesComponent}/>
            <Route path="/formularioProductos" component={ProductosComponent}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}



export default App;

  

