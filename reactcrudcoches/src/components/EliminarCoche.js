import React, { Component } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class EliminarCoche extends Component {

    state = {
        status: false
    }

    deleteCoche = () => {
        var request = "api/coches/" + this.props.idcoche;
        var url = Global.apiUrlCoches + request;
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
        <h1>¿Eliminar Coche {this.props.idcoche}?</h1>
            <button className='btn btn-danger' onClick={() => this.deleteCoche()}>Eliminar</button>
      </div>
    )
  }
}
