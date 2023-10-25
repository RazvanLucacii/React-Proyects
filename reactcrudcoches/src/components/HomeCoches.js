import React, { Component } from 'react'
import Global from './../Global'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import gifload from './../assets/images/gifload.gif'


export default class HomeCoches extends Component {

    state = {
        coches: [],
        status: false
    }

    loadCoches = () => {
        var request = "api/coches";
        var url = Global.apiUrlCoches + request;
        axios.get(url).then(response => {
            this.setState({
                coches: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

  render() {
    if(this.state.status == false){
        return(<div><img src={gifload} style={{width:"600px", height:"400px"}}/></div>)
    }else{
        return (
            <div>
                <h1>Home Coches</h1>
                {
                    this.state.status == true &&
                    (
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Conductor</th>
                                    <th>Imagen</th>
                                    <th>-</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coches.map((coche, index) =>{
                                        return(<tr key={index}>
                                            <td>{coche.marca}</td>
                                            <td>{coche.modelo}</td>
                                            <td>{coche.conductor}</td>
                                            <td><img src={coche.imagen} style={{width:"350px", height:"250px"}} /></td>
                                            <td>
                                                <NavLink className="btn btn-success" aria-current="page" to={"/details/" + coche.idCoche}>
                                                    Detalles
                                                </NavLink>
                                                <NavLink className="btn btn-primary" aria-current="page" to={"/update/" + coche.idCoche}>
                                                    Modificar
                                                </NavLink>
                                                <NavLink className="btn btn-danger" aria-current="page" to={"/delete/" + coche.idCoche}>
                                                    Eliminar
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
}
