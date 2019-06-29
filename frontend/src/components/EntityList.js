import React from 'react';

class EntityList extends React.Component {

    constructor(props) {
      super(props);
      this.state= { entities: [], seleccionado:{}}
      this.borrar = this.borrar.bind(this); 
      this.componentWillMount= this.componentWillMount.bind(this);
      this.selectProducto= this.selectProducto.bind(this)
      
    }
    componentWillMount() {
      this.actualizarLista();
    }

    actualizarLista() {
      fetch(`http://localhost:8888/${this.props.entity}`)
        .then( res => res.json())
        .then( entities => this.setState({entities: entities}));
        //es lo mismo que lo de arriba pero con data
        // .then( data => this.setState({entities: data}));
    }

    selectProducto(unL) {
      this.setState({seleccionado: unL})
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
      //esto no va xq el delete no muestra nada por pantalla,solo borra
      // .then(data=> console.log(data))
      .then(() => this.actualizarLista());
    }
    editar(unL) {
      console.log(unL)
    var nuevaLista = this.state.entities.map( (item) =>  (item._id != unL._id) ?  item : unL   )
    this.setState({entities: nuevaLista, seleccionado: unL})
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
          <i className = "icon-pencil" onClick= {()=>{this.editar(object)}} > Editar</i> 
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
  
