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

        for(let i = 0; i < this.props.id_hospitales.length; i++){
            mensaje += "idhospital=" + this.props.id_hospitales[i] + "&";
        }
        var request = "api/trabajadores/trabajadoreshospitales?";
        var url = Global.apiUrls + request + mensaje;
        axios.get(url).then(response => {
            this.setState({
                trabajadores: response.data,
                status: true
            })

        })

    }

    incrementoSalario = () =>{
        if(this.state.idTrabajadores === 0)
            return       
        return(<IncrementoSalario id_trabajadores={this.state.idTrabajadores}/>)
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
        {
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID Trabajador</th>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>ID Hospital</th>
                        <th>Incremento</th>
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
                                    <td>
                                        <NavLink className="btn btn-success" aria-current="page" to={"/incremento/" + trabajador.idTrabajador}>
                                            Incremento Salario
                                        </NavLink>    
                                    </td>
                                </tr>)
                            })
                        )
                    }
                </tbody>
            </table>
        }
      </div>
    )
  }
}
