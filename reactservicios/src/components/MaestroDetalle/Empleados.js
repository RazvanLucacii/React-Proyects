import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class Empleados extends Component {
    state = {
        empleados: [],
        status: false
    }

    loadEmpleados = () => {
        var idDept = this.props.iddepartamento;
        var request = "api/empleados/empleadosdepartamento/" + idDept;
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response => {
            this.setState({
                status: true,
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        console.log("Old props: " + oldProps.iddepartamento);
        console.log("Actual props " + this.props.iddepartamento);
        //solamente cargaremos de nuevo los datos si props ha cambiado
        if(this.props.iddepartamento != oldProps.iddepartamento){
            this.loadEmpleados();
        }
    }

  render() {
    return (
      <div>
        <h1>
            Empleados Component {this.props.iddepartamento}
        </h1>
        {
            <table border="1">
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status = true && (
                            this.state.empleados.map((empleado, index) => {
                                return (
                                    <tr key={index}>
                                        <td key="1">{empleado.apellido}</td>
                                        <td key="2">{empleado.oficio}</td>
                                        <td key="3">{empleado.salario}</td>
                                    </tr>
                                )
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
