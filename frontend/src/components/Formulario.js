import React, { Component } from 'react';

class Formulario extends Component {

    render() {
      return (  
        <div className="container">
		<div className="row">
		    <div className="col-mod-5">
			    <div className="card">
			        <div className="card-body">
				        <form action =" ">
					        <div className="col-lg-2">
					            <input type="nombre" className="form-control" 
                                placeholder ="nombre del producto"/>
					        </div>
						    <div class="col-lg-2">
                                 <input type="precio" class="form-control"
                                   placeholder="precio"/>
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



  export default Formulario