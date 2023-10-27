import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Global from '../Global'


export default class CreateCoches extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();
    
    state = {
        status: false
    }

    insertCoche = (e) => {
        e.preventDefault();
        var id = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        var request = "api/coches/insertcoche";
        var url = Global.apiUrlCoches + request;
        axios.post(url, coche).then(response =>{
            this.setState({
                status: true
            })
        })
    }

  render() {
    if(this.state.status === true){
        return(<Navigate to="/"/>)
    }else{
        return (
          <div>
            <h1>Create Coches</h1>
            <form>
                <label>Id Coche</label>
                <input type="number" ref={this.cajaId} className='form-control'/>
                <label>Marca</label>
                <input type="text" ref={this.cajaMarca} className='form-control'/>
                <label>Modelo</label>
                <input type="text" ref={this.cajaModelo} className='form-control'/>
                <label>Conductor</label>
                <input type="text" ref={this.cajaConductor} className='form-control'/>
                <label>Imagen</label>
                <input type="file" ref={this.cajaImagen} className='form-control'/>
                <br/>
                <button className='btn btn-info' onClick={this.insertCoche}> 
                    Create
                </button>
            </form>
    
          </div>
        )
    }
  }
}
