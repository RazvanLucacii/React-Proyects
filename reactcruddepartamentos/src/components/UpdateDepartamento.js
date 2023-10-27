import React, { Component } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class UpdateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        departamento: {},
        statusGet: false,
        status: false
    }

    findDepartamento = () => {
        var request = "api/departamentos/" + this.props.iddepartamento;
        var url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                statusGet: true
            })
        })
    }

    updateDepartamento = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        var data = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        var request = "api/departamentos";
        var url = Global.apiUrlDepartamentos + request;
        axios.put(url, data).then(response =>{
            this.setState({
                status: true
            })
        })
    }
    
    componentDidMount = () => {
        this.findDepartamento();
    }

  render() {
    return (
      <div>
        {
            this.state.status === true &&
            (
                <Navigate to="/"/>
            )
        }
        <NavLink to="/" >Back to List</NavLink>
        <h1>Update Departamento {this.props.iddepartamento}</h1>
        {
            this.state.statusGet === true &&
            (
                <form>
                    <input type="hidden" defaultValue={this.state.departamento.numero} ref={this.cajaNumero} className='form-control'/>
                    <label>Nombre</label>
                    <input type="text" defaultValue={this.state.departamento.nombre} ref={this.cajaNombre} className='form-control'/>
                    <label>Localidad</label>
                    <input type="text" defaultValue={this.state.departamento.localidad} ref={this.cajaLocalidad} className='form-control'/>
                    <button onClick={this.updateDepartamento} className='btn btn-primary'>Modificar</button>
                </form>
            )
        }
      </div>
    )
  }
}
