import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

export default class IncrementoSalario extends Component {
    cajaId = React.createRef();
    cajaSalario = React.createRef();
    
    state = {
        status: false
    }


    updateSalario = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaId.current.value);
        var salario = this.cajaSalario.current.value;
        var mensaje = "";

        for(var i = 0; i < this.props.id_hospitales.length; i++){
            mensaje += "idhospital=" + this.props.id_hospitales[i] + "&";
        }

        var request = "api/trabajadores/updatesalariotrabajadoreshospitales?incremento=" +salario + "&" + mensaje;
        var url = Global.apiUrls + request;
        axios.put(url).then(response =>{
            this.setState({
                status: true
            });
        });
    }



  render() {
    if(this.cajaSalario !== null){
        return (<div>
            <h1>Incremento Salario</h1>
            {

                <form>
                    <input type="hidden" ref={this.cajaId} className='form-control'></input>
                    <label>Salario</label>
                    <input type="number" min={0} ref={this.cajaSalario} className='form-control'></input>
                    <button onClick={this.updateSalario} className='btn btn-primary'>Modificar</button>
                </form>
            }
        </div>)

    }
  }
}
