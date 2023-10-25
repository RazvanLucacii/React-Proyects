import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import gifload from './../assets/images/gifload.gif'
import {NavLink} from 'react-router-dom';

export default class HomeDepartamentos extends Component {
    state = {
        departamentos: [], 
        status: false
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response =>{
            this.setState({
                departamentos: response.data,
                status:true
            })
        })
    }

    componentDidMount = () =>{
        this.loadDepartamentos();
    }
  render() {

    if (this.state.status == false){
        return(<div><img src={gifload} style={{width:"550px", height:"400px"}}/></div>)
    }else{
        return (
        <div>
            <h1>Home Departamentos</h1>
            {
                this.state.status == true &&
                (
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento, index) => {
                                    return(<tr key={index}>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
                                        <td>
                                            <NavLink className="btn btn-success" to={"/details/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad}>
                                                Detalles
                                            </NavLink>
                                            <NavLink className="btn btn-primary" to={"/update/" + departamento.numero}>
                                                Modificar
                                            </NavLink>
                                            <NavLink className="btn btn-danger" to={"/delete/" + departamento.numero}>
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
    </div>)
    }
  }
}
