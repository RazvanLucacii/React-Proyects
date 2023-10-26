import React, { Component } from 'react'
import Global from "./../Global"
import axios from "axios"
import Trabajadores from './Trabajadores';

export default class Hospitales extends Component {
    selectHospitales = React.createRef();

    state = {
        hospitales: [],
        idHospitales: 0,
        status: false
    }
    loadHospitales = () =>{
        var request = "api/hospitales";
        var url = Global.apiUrls + request;
        axios.get(url).then(response =>{
            this.setState({
                hospitales: response.data,
                status: true
            })
        })
    }

    buscarTrabajadores = (e) =>{
        e.preventDefault();
        var options = [...this.selectHospitales.current.selectedOptions];
        var id_hospitales = []
        options.map((option,index)=>{
            id_hospitales.push(option.value)
        })
        this.setState({
            idHospitales: id_hospitales
        })
    }

    Render_Trabajadores = ()=>{ 
        if(this.state.idHospitales === 0)
            return
        return(<Trabajadores id_hospitales={this.state.idHospitales}/>)
    }

    componentDidMount = () =>{
        this.loadHospitales();
    }

  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <hr/>
        <select ref={this.selectHospitales} multiple>
            {
                this.state.status === true &&
                (
                    this.state.hospitales.map((hospital, index) =>{
                        return(<option key={index} value={hospital.idHospital}>
                            {hospital.nombre}
                        </option>)
                    })
                )
            }
        </select>
        <button onClick={this.buscarTrabajadores}>Mostrar Trabajadores</button>
        {
            this.Render_Trabajadores()
        }
      </div>
    )
  }
}
