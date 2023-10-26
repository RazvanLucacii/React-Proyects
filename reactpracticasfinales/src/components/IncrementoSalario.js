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
        var request = "api/trabajadores/" + this.props.idtrabajador;
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
            trabajador : id,
            salario: salario
        }

        var request = "api/trabajadores/updatesalariotrabajadoresoficio/" + salario;
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
                        <input type="hidden" ref={this.cajaId} className='form-control'></input>
                        <label>Salario</label>
                        <input type="number" min={0} ref={this.cajaSalario} className='form-control'></input>
                        {/* <h2>{this.state.trabajador.salario + this.cajaSalario.current.value}</h2> */}
                        <button onClick={this.updateSalario} className='btn btn-primary'>Modificar</button>
                    </form>
                )
            }
        </div>)

    }
  }
}
