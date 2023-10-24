import React, { Component } from 'react'

export default class EmpleadosOficios extends Component {
    selectOficio = React.createRef();

    state = {
        oficios: [],
        empleados: [],
        statusDept: false,
        statusEmp: false
    }

    loadOficios = (e) => {
        e.preventDefault();
        var idDepartamento = this.selectDepartamento.current.value;
        var request = "api/Empleados/oficios";
        var url = Global.urlApiOficios + request;
        axios.get(url).then(response => {
            this.setState ({
                empleados: response.data,
                statusEmp: true
            })
        })
    }

    buscarOficios = () => {
        var request = "api/Empleados/EmpleadosOficio/" + idOficio;
        var url = Global.urlApiOficios + request;
        axios.get(url).then(response => {
            this.setState ({
                departamentos: response.data,
                statusDept: true
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }
    
    render() {
        return (
        <div>
            <h1>Departamentos Empleados Api</h1>
            <form>
                <label>Seleccione un departamento </label>
                <select ref={this.selectOficio}>
                    {
                        this.state.statusDept == true &&
                        (
                            this.state.departamentos.map((empleado, index) => {
                                return (<option key={index} value={empleado.Numero}>
                                    {empleado.oficio}
                                </option>)
                            })
                        )
                    }
                </select>
                <button onClick={this.buscarOficios}>Mostrar Empleados</button>
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