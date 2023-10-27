import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import imagenChampions from './../assets/images/champions.png'
import Global from '../Global';
import axios from 'axios';
import DetalleEquipos from './DetalleEquipos';

export default class MenuEquipos extends Component {

    state = {
        equipos: [],
        status: false
    }

    loadEquipos = () => {
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
        this.loadEquipos();
    }

    componentDidUpdate = (oldProps) =>{
        if(oldProps.idEquipo !== this.state.oldProps){
            this.loadEquipos();
        }
    }

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
                                {
                                    this.state.equipos.map((equipo, index) =>{
                                        return(<li key={index}>
                                            <NavLink to={"/details/" + equipo.idEquipo}>{equipo.nombre}</NavLink>
                                        </li>)
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}
