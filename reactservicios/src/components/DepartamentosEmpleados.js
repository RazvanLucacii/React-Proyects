import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DepartamentosEmpleados extends Component {
    selectDepartamento = React.createRef();

    state = {
        empleados: [],
        departamentos: [],
        statusDept: false,
        statusEmp: false
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var idDepartamento = this.selectDepartamento.current.value;
        var request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            this.setState ({
                empleados: response.data,
                statusEmp: true
            })
        })
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

    componentDidMount = () => {
        this.loadDepartamentos();
    }
    
    render() {
        return (
        <div>
            <h1>Departamentos Empleados Api</h1>
            <form>
                <label>Seleccione un departamento </label>
                <select ref={this.selectDepartamento}>
                    {
                        this.state.statusDept == true &&
                        (
                            this.state.departamentos.map((departamento, index) => {
                                return (<option key={index} value={departamento.Numero}>
                                    {departamento.Nombre}
                                </option>)
                            })
                        )
                    }
                </select>
                <button onClick={this.buscarEmpleados}>Mostrar Empleados</button>
            </form>
            <ul>
                {
                    this.state.statusEmp == true &&
                    (
                        this.state.empleados.map((empleado, index) => {
                            return (<li key={index}>
                                {empleado.apellido}
                            </li>)
                        })
                    )
                }
            </ul>
        </div>
        )
    }
}
