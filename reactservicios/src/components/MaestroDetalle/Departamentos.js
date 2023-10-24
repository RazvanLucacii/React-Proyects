import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from 'axios';
import Global from '../../Global';

export default class Departamentos extends Component {
    selectDepartamento = React.createRef();

    state = {
        idDepartamento : 0,
        departamentos: [],
        statusDept: false
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.urlApiDepartamentos + request;
        axios.get(url).then(response => {
            this.setState ({
                departamentos: response.data,
                statusDept: true
            })
        })
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var id = this.selectDepartamento.current.value;
        this.setState ({
            idDepartamento: id
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }



    render() {
        return (
        <div>
            <h1>Departamentos Component</h1>
            <form>
                <label>Seleccione un departamento</label>
                <select ref={this.selectDepartamento}>
                    {
                        this.state.statusDept == true &&
                        (
                            this.state.departamentos.map((departamento, index) => {
                                return(<option key={index} value={departamento.Numero}>
                                    {departamento.Nombre}
                                </option>)
                            })
                        )
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
                <h2 style={{color:"red"}}>
                    Departamento seleccionado:
                    {this.state.idDepartamento}
                </h2>
            </form>
            {
                this.state.idDepartamento != 0 &&
                (<Empleados iddepartamento = {this.state.idDepartamento}/>)

            }
        </div>
        )
    }
}
