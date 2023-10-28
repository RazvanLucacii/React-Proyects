import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Global from '../Global'

export default class DetalleEquipos extends Component {
  state = {
    equipos: {},
    status: false
  }

  loadEquipos = () =>{
    var request = "api/equipos/" + this.props.idequipo;
    var url = Global.apiUrls + request;
    axios.get(url).then(response =>{
      this.setState({
        equipos: response.data,
        status: true
      })
    })
  }

  componentDidMount = () =>{
    this.loadEquipos();
  }

  render() {
    return (
      <div className='container text-center'>
        <form>
          <div>
            <h2>{this.state.equipos.nombre}</h2>
            <img src={this.state.equipos.imagen} style={{width:"200px"}} />
            <h3>Champions: {this.state.equipos.champions}</h3>
            <p>{this.state.equipos.descripcion}</p>
            <div>
              <NavLink className="btn btn-success" to={"/jugadores/" + this.props.idequipo}>Jugadores</NavLink>
              <NavLink className="btn btn-primary" to="/">Volver</NavLink>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
