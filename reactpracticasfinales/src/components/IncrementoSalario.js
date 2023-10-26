import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

export default class IncrementoSalario extends Component {
    cajaId = React.createRef();
    cajaSalario = React.createRef();
    
    state = {
        trabajador: {},
        statusGet: false,
        status: false
    }

    findTrabajador = () =>{
        var request = "api/trabajadores/" + this.props.id_trabajadores;
        var url = Global.apiUrls + request;
        axios.get(url).then(response =>{
            this.setState({
                trabajador: response.data,
                statusGet: true
            })
        })
    }

    updateSalario = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaId.current.value);
        var salario = this.cajaSalario.current.value;

        var datos = {
            idTrabajador : id,
            salario: salario
        }

        var request = "api/trabajadores/updatesalariotrabajadoresoficio/" + this.props.salario;
        var url = Global.apiUrls + request;
        axios.put(url, datos).then(response =>{
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.findTrabajador();
    }



  render() {
    if(this.cajaSalario !== null){
        return (<div>
            <NavLink to="/">Back to List</NavLink>
            <h1>Incremento Salario</h1>
            {
                this.state.statusGet === true &&
                (
                    <form>
                        <label>ID Trabajador</label>
                        <input type="hidden" ref={this.cajaId} className='form-control'></input>
                        <label>Salario</label>
                        <input type="number" min={0} ref={this.cajaSalario} className='form-control'></input>
                        <h2>{this.state.trabajador.salario + this.cajaSalario.current.value}</h2>
                    </form>
                )
            }
        </div>)

    }
  }
}
