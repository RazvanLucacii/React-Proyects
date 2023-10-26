import { Axios } from 'axios'
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Global from '../Global'

export default class DetalleEquipos extends Component {
  render() {
    return (
      <div>
        <form>
          <h2></h2>
          <img />
          <h3></h3>
          <p></p>
          <div>
            <NavLink>Jugadores</NavLink>
            <NavLink>Volver</NavLink>
          </div>
        </form>
      </div>
    )
  }
}
