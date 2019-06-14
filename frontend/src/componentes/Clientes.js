import React from 'react';

class Clientes extends React.Component {
  constructor(props) {
    super(props);
    this.state= { clientes: []}
  }

  componentWillMount() {
    fetch(`http://localhost:8888/clientes`)
      .then( res => res.json())
      .then( client => this.setState({clientes: client}));
  }

    render() {

      
      if( this.state.clientes.length > 0 ) {
        return(
          <div className="clinetesCSS">
              <h2>{this.props.titulo}</h2>
          
          <table className="table">
            <thead>
              <tr>
                 <th>id</th>
                 <th>nombre</th>
                 <th>direccion</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>)
      }
      else {
        return(
          <div className="clientesCSS">
              <h2>{this.props.titulo}</h2>
              CARGANDO
          </div>);  
      }

    }

    renderRows() {
      return this.state.clientes.map((unCliente, index) => {
        return (
          <tr key={unCliente._id}>
            <td>{unCliente._id}</td> 
              <td>{unCliente.nombre}</td>
              <td>{unCliente.direccion}</td>
          </tr>
        );
      })
    }
  
  }



  export default Clientes