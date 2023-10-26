import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import imagenChampions from './../assets/images/champions.png'

export default class MenuEquipos extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={imagenChampions} style={{height:"50px", width:"50px"}}/>Champions</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>1</li>
                                <li>2</li>
                            </ul>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}
