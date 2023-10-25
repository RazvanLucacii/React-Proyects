import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

export default class DetalleDepartamento extends Component {

    state = {
        departamento: {},
        status: false
    }

    buscarDepartamento = () =>{
        var request = "api/departamentos/" + this.props.iddepartamento;
        var url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response =>{
            this.setState({
                departamento: response.data,
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.buscarDepartamento();
    }

  render() {
    return (
      <div>
        <h1>Detalle Departamento {this.props.iddepartamento}</h1>
        <NavLink to="/">Back to List</NavLink>
        <hr/>
        <ul className='list-group'>
            <li className='list-group-item'>
                ID: {this.props.iddepartamento}
            </li>
            <li className='list-group-item'>
                Nombre: {this.props.nombre}
            </li>
            <li className='list-group-item'>
                Localidad: {this.props.localidad}
            </li>
        </ul>
      </div>
    )
  }
}
