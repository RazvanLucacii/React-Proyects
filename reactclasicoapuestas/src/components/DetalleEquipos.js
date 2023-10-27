import axios from 'axios'
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Global from '../Global'

export default class DetalleEquipos extends Component {
  state = {
    equipos: [],
    status: false
  }

  loadEquipos = () =>{
    var request = "api/equipos";
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
        {
          this.state.status === true &&
          (
            <form>
              <div>
              {
                this.state.equipos.map(() =>{
                  return(
                    <h2></h2>
                    <img src={} />
                    <h3></h3>
                    <p></p>
                    <div>
                      <NavLink className="btn btn-success" to="/jugadores">Jugadores</NavLink>
                      <NavLink className="btn btn-primary" to="/">Volver</NavLink>
                    </div>
                    
                  )
                })
              }
              </div>
            </form>
          )
        }
      </div>
    )
  }
}
