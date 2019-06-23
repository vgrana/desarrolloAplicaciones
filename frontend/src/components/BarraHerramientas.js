import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
  //variable de estado q me permite ocultar el menu hasta q no lo necesite;  
    this.state = {
      showMenu: false,
    }
    //lo hace asi porq sino no puede pasarse this como parámetro
    this.showMenu= this.showMenu.bind(this);
    this.closeMenu= this.closeMenu.bind(this);
  }
  showMenu(event){
    event.preventDefault();
    this.setState({showMenu:true},() => {
      document.addEventListener('click',this.closeMenu);
    });
  }
  closeMenu(){
    this.setState({showMenu :false}, ()=>{
      document.removeEventListener('click', this.closeMenu);
    });
  }
  render() {
    return (
      <div >
        <button onClick={this.showMenu}>
          {this.props.nombreBoton}  
        </button>
              {
          this.state.showMenu
          ?(
        
        <div className="menu"
        ref= {(element) =>{
          this.dropdownMenu = element;
        }}>
          { <button>
          {/* agrege para poder poner los items de la lista en el menu */}
            insertar 
            </button>
          }
        </div>
          )
          :(
            null
          )
        }
      </div>
    );
  }
}
export default Card;