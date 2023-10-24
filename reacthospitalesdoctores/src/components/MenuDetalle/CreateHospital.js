import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    state = {
        mensaje: "",
        status: false
    }

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (e) => {
        e.preventDefault();
        var request = "webresources/hospitales/post";
        var url = Global.apiUrlHospitales + request;
        var idhospital = parseInt(this.cajaId.current.value);
        var nombre = this.cajaNombre.current.value;
        var direccion = this.cajaDireccion.current.value;
        var telefono = this.cajaTelefono.current.value;
        var camas = parseInt(this.cajaCamas.current.value);
        //debemos declarar un objeto json dentro de react
        //con el mismo nombre de propiedades
        var hospital = {
            idhospital: idhospital,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }
        //el metodo post de axios puede recibir dos parametros
        //1) url del metodo post del servicio
        //2) objeto a enviar al servicio
        axios.post(url, hospital).then(response => {
            this.setState({
                mensaje: "Hospital " + nombre + "insertado",
                status: true
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (<Navigate to="/listahospitales"/>)
        }
        <h1>New Hospital</h1>
        <h2>{this.state.mensaje}</h2>
        <form>
            <label>Id Hospital</label>
            <input type="number" className='form-control' ref={this.cajaId} />
            <label>Nombre</label>
            <input type="text" className='form-control' ref={this.cajaNombre} />
            <label>Direccion</label>
            <input type="text" className='form-control' ref={this.cajaDireccion} />
            <label>Telefono</label>
            <input type="text" className='form-control' ref={this.cajaTelefono} />
            <label>Camas</label>
            <input type="number" className='form-control' ref={this.cajaCamas} />
            <button className='btn btn-warning'
            onClick={this.insertHospital}>
                Create
            </button>
        </form>
      </div>
    )
  }
}
