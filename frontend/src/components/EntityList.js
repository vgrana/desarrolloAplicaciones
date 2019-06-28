import React from 'react';
//import FormularioCliente from './FormularioCliente';
//import FormularioProducto from './FormularioProducto';


class EntityList extends React.Component {

    constructor(props) {
      super(props);
      this.state= { entities: []}
      this.borrar = this.borrar.bind(this); 
      this.componentWillMount= this.componentWillMount.bind(this);
      
    }

    componentWillMount() {
      this.actualizarLista();
    }

    actualizarLista() {
      fetch(`http://localhost:8888/${this.props.entity}`)
        .then( res => res.json())
        .then( entities => this.setState({entities: entities}));
    }

    borrar(id){
      console.log("Eliminar item  " + id)
      // despues / deberia ir la clase de donde voy a borrar el id
      fetch(`http://localhost:8888/${this.props.entity}/` + id, {
        
      method: 'DELETE', 
        headers: {
        'Accept':'application/json',
        'Content-Type':'application/json' }
      }) 
      .then(res =>res.json())
      .then(data=> console.log(data), this.actualizarLista());
    }

    render() {
      if(this.state.entities.length > 0) {
        //uso el primero para conocer los atributos
      var columns = Object.entries(this.state.entities[0]).map(entry => entry[0])
      return (
        <div className="EntityList">
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                {this.renderHeaders(columns)}
              </tr>
            </thead>
            <tbody>
              {this.renderRows(columns)}
            </tbody>
          </table>
        </div>
      );
    }
    else {
      return (<p> Cargando {this.props.entity} </p>);
    }
    }

    renderHeaders(columns) {
      return columns.map((col, index) => {
        return (
            <th>{col}</th>
        );
      })      
    }

    renderRows(columns) {
      return this.state.entities.map((object, index) => {
        return (
          <tr key={object._id}>
            {this.renderRow(object, columns)}
          
          <td>
          
          <button className=" btn btn-success">
          {/* no anda el lapiz */}
          <i className = "icon-pencil" > Editar</i> 
           </button>
           {/* en el style le paso un objeto y le doy valor */}
           <button className=" btn btn-danger"  style = {{margin: '4px'}} 
           onClick = {()=> {this.borrar(object._id) }}>
          {/* no anda el lapiz */}
          <i className = "icon-delete" > Borrar</i> 
           </button>
          </td>
          </tr>
        );
      })
    }

    renderRow(object, columns,) {
      return columns.map((attName, index) => {
          return (

          
            <td>{object[attName]}</td>);
      });
    }
  }



  export default EntityList
  
