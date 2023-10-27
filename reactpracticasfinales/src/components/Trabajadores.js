import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import IncrementoSalario from './IncrementoSalario';

export default class Trabajadores extends Component {
    state = {
        trabajadores: [],
        idTrabajadores: 0,
        status: false
    }

    loadTrabajadores = () =>{
        var mensaje = "";
        var request = "api/trabajadores/trabajadoreshospitales?";

        for(let i = 0; i < this.props.id_hospitales.length; i++){
            mensaje += "idhospital=" + this.props.id_hospitales[i] + "&";
        }

        mensaje = mensaje.substring(0, mensaje.length - 1);

        var url = Global.apiUrls + request + mensaje;
        axios.get(url).then(response => {
            this.setState({
                trabajadores: response.data,
                status: true
            })
        })

    }

    incrementoSalario = () =>{
        return(<IncrementoSalario id_hospitales={this.state.id_hospitales} />)
    }

    componentDidMount = () =>{
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) =>{
        if(this.props.id_hospitales !== oldProps.id_hospitales){
            this.loadTrabajadores();
        }
    }

  render() {
    return (
      <div>
        <hr/>
        <h1>Trabajadores</h1>
        <br/>
        {
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID Trabajador</th>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>ID Hospital</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status === true &&
                        (
                            this.state.trabajadores.map((trabajador, index) =>{
                                return(<tr key={index}>
                                    <td>{trabajador.idTrabajador}</td>
                                    <td>{trabajador.apellido}</td>
                                    <td>{trabajador.oficio}</td>
                                    <td>{trabajador.salario}</td>
                                    <td>{trabajador.idHospital}</td>
                                </tr>)
                            })
                        )
                    }
                </tbody>
            </table>
        }
        {this.incrementoSalario()}
      </div>
    )
  }
}
