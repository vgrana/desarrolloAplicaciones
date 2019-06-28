import React, { Component } from 'react';

class FormularioProducto extends Component {

    constructor(props) {
      super(props);
      
      this.state = this.estadoInicial();
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    estadoInicial() {
      return {nombre: '', precio: ''};
    }

    handleInputChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      this.guardar();
      event.preventDefault();
    }
//productos deberia poder poner cualquiera
    guardar() {
      const productoNuevo = {nombre: this.state.nombre, precio: this.state.precio};
      fetch(`http://localhost:8888/productos`, {
        method: 'POST',
        body: JSON.stringify(productoNuevo),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => this.setState(this.estadoInicial()) )
        .then(() => this.props.actualizarLista());
    }



    render() {
      return (  
        <div className="container">
		<div className="row">
		    <div className="col-mod-5">
			    <div className="card">
			        <div className="card-body">
				        <form onSubmit={this.handleSubmit}>
					        <div className="col-lg-2">
					            <input type="nombre" className="form-control" name="nombre"
                                placeholder ="nombre del producto" value={this.state.props} onChange={this.handleInputChange}/>
					        </div>
						    <div class="col-lg-2">
                                 <input type="precio" class="form-control" name="precio"
                                   placeholder="precio" value={this.state.props} onChange={this.handleInputChange}/>
                                </div>
                                <div className="col-lg-2">
                            <button type="submit" class="btn btn-primary btn-block">Insertar</button>							 						
                            </div>
				        </form>					
			        </div>
		        </div>
		    </div>
        </div>
    </div>
        
      );
    }
  }
  export default FormularioProducto;