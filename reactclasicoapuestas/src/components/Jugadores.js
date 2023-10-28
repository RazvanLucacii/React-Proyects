import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Global from './../Global'

export default class Jugadores extends Component {

  state = {
    jugadores: {},
    equipos:[],
    status: false
  }

  loadjugadores = () => {
      var request = "api/jugadores/jugadoresequipos/" + this.props.idEquipo;
      var url = Global.apiUrls + request;
      axios.get(url).then(response => {
          this.setState({
              jugadores: response.data,
              status: true
          })
      })
  }
  loadEquipos = () =>{
    var request = "api/equipos";
      var url = Global.apiUrls + request;
      axios.get(url).then(response => {
          this.setState({
              equipos: response.data,
              status: true
          })
      })
  }

  componentDidMount = () => {
      this.loadjugadores();
      this.loadEquipos();
  }

  render() {
    return (
      <div className='container text-center'>
        {
          this.state.equipos.map((equipo, index) =>{
            return(<NavLink className="btn btn-success" to={"/details/" + equipo.idEquipo}>Volver a {equipo.nombre}</NavLink>)
          })
        }
        <br/><br/>
        {
          this.state.status === true &&
          (
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      this.state.jugadores.map((jugador, index) =>{
                          return(<tr key={index}>
                              <td>{jugador.nombre}</td>
                              <td><img src={jugador.imagen} style={{width:"200px"}} alt="." /></td>
                              <td>
                                  <NavLink className="btn btn-success" aria-current="page" to={"/detailsjugador/" + jugador.idJugador}>
                                      Detalles
                                  </NavLink>
                              </td>
                          </tr>)
                      })
                    }
                </tbody>
            </table>
          )
      }
      </div>
    )
  }
}
