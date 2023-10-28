import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Global from '../Global'

export default class DetalleJugadores extends Component {

  state = {
    jugadores: {},
    status: false
  }

  loadJugador = () =>{
    var request = "api/jugadores/" + this.props.idjugador;
    var url = Global.apiUrls + request;
    axios.get(url).then(response =>{
      this.setState({
        jugadores: response.data,
        status: true
      })
    })
  }

  componentDidMount = () =>{
    this.loadJugador();
  }

  render() {
    return (
      <div className='container text-center'>
        <form>
          <div>
            <h2>{this.state.jugadores.nombre}</h2>
            <img src={this.state.jugadores.imagen} style={{width:"200px"}} />
            <h3>{this.state.jugadores.posicion}</h3>
            <p>Fecha Nacimiento: {this.state.jugadores.fechaNacimiento}</p>
            <p>Pais: {this.state.jugadores.pais}</p>
            <div>
              <NavLink className="btn btn-success" to={"/jugadores/" + this.state.jugadores.idEquipo}>Jugadores</NavLink>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
