import React from 'react';

import EntityList from './components/EntityList'
import HomeComponent from './components/HomeComponent'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import './App.css';
//NavLink

function ClientesComponent(){
  return (<EntityList entity="clientes"/>)
}
function ProductosComponent(){
  return (<EntityList entity="productos"/>)
}
function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" />*/}
            
{/*import logo from './logo.svg';*/}
        {/* <ul>  
         <li><NavLink to ="/">Home </NavLink></li>
         <li><NavLink to ="/clientes">Clientes </NavLink></li>
         <li><NavLink to ="/productos">Productos</NavLink></li>
       </ul> */}
       <nav>
         <div className="nav-wrapper">
         <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn" href= "/">Home</a></li>
             <li><a className="waves-effect waves-light btn" href= "/clientes">Clientes</a></li>
             <li><a className="waves-effect waves-light btn" href= "/productos">Productos</a></li>
        </ul>
      
       </div>
       </nav>

      </header> 
      <main className="App-main">
        <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/clientes"  component={ClientesComponent} />
            <Route path="/productos" component={ProductosComponent} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
