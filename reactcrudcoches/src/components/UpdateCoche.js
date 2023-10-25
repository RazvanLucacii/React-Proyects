import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink, Navigate } from 'react-router-dom'

export default class UpdateCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        coche: {},
        statusGet: false,
        status: false
    }

    findCoche = () => {
        var request = "api/coches/" + this.props.idcoche;
        var url = Global.apiUrlCoches + request;
        axios.get(url).then(response => {
            this.setState({
                coche: response.data,
                statusGet: true
            })
        })
    }

    updateCoche = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var datos = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        var request = "api/coches/updatecoche";
        var url = Global.apiUrlCoches + request;
        axios.put(url, datos).then(response =>{
            this.setState({
                status: true
            })
        }) 
    }

    componentDidMount = () =>{
        this.findCoche();
    }


  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (
                <Navigate to="/" />
            )
        }
        <NavLink to="/">Back to List</NavLink>
        <h1>Update Coche {this.props.idcoche}</h1>
        {
            this.state.statusGet == true &&
            (
                <form>
                    <input type='hidden' ref={this.cajaId} defaultValue={this.state.coche.id} className='form-control'/>
                    <label>Marca</label>
                    <input type='text' ref={this.cajaId} defaultValue={this.state.coche.marca} className='form-control'/>
                    <label>Modelo</label>
                    <input type='text' ref={this.cajaId} defaultValue={this.state.coche.modelo} className='form-control'/>
                    <label>Conductor</label>
                    <input type='text' ref={this.cajaId} defaultValue={this.state.coche.conductor} className='form-control'/>
                    <label>Imagen</label>
                    <input type='file' ref={this.cajaId} defaultValue={this.state.coche.imagen} className='form-control'/>
                    <button className='btn btn-primary' onClick={this.updateCoche}>Modificar</button>
                </form>
            )
        }
      </div>
    )
  }
}
