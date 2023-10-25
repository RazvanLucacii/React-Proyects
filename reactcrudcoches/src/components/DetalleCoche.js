import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import {NavLink} from 'react-router-dom'

export default class DetalleCoche extends Component {
    state = {
        coche: {},
        status: false
    }

    buscarCoche = () =>{
        var request = "api/coches/findcoche/" + this.props.idcoche;
        var url = Global.apiUrlCoches + request;
        axios.get(url).then(response => {
            this.setState({
                coche: response.data,
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.buscarCoche();
    }

  render() {
    return (
      <div>
        <h1>Detalle Coches {this.props.idcoche}</h1>
        <NavLink to="/">Back to List</NavLink>
        <hr/>
        <ul className='list-group'>
            <li className='list-group-item'>
                ID: {this.props.idcoche}
            </li>
            <li className='list-group-item'>
                Marca: {this.state.coche.marca}
            </li>
            <li className='list-group-item'>
                Modelo: {this.state.coche.modelo}
            </li>
            <li className='list-group-item'>
                Conductor: {this.state.coche.conductor}
            </li>
            <li className='list-group-item'>
                Imagen: <img src={this.state.coche.imagen} style={{width:"350px", height:"250px"}} />
            </li>
        </ul>
      </div>
    )
  }
}
