import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Global from './../Global'

export default class Home extends Component {

    state = {
        equipos: {},
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

  render() {
    return (
      <div>
        <h1>Home Equipos</h1>
            {
                this.state.status == true &&
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
                                this.state.equipos.map((equipo, index) =>{
                                    return(<tr key={index}>
                                        <td>{equipo.nombre}</td>
                                        <td><img src={equipo.imagen} style={{width:"200px"}} /></td>
                                        <td>
                                            <NavLink className="btn btn-success" aria-current="page" to={"/details/" + equipo.idEquipo}>
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
