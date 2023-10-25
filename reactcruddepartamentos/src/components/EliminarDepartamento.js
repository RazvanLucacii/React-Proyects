import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink, Navigate } from 'react-router-dom'
import DetalleDepartamento from './DetalleDepartamento'


export default class EliminarDepartamento extends Component {

    state = {
        status: false
    }

    deleteDepartamento = () => {
        var request = "api/departamentos/" + this.props.iddepartamento;
        var url = Global.apiUrlDepartamentos + request;
        axios.delete(url).then(response => {
            this.setState({
                status: true
            })
        })
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
        <NavLink to="/" >Back to List</NavLink>
        <h1>¿Eliminar Departamento {this.props.iddepartamento}?</h1>
            <button className='btn btn-danger' onClick={() => this.deleteDepartamento()}>Eliminar</button>
      </div>
    )
  }
}
