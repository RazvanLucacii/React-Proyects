import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';


export default class DetallesDoctor extends Component {
  state = {
    doctor: null,
    status: false
  }

  loadDoctoresDetalles = () => {
    var request = "api/doctores/" + this.props.iddoctor;
    var url = Global.apiUrlDoctores + request;
    axios.get(url).then(response =>{
      this.setState ({
        doctor: response.data,
        status: true
      })
    })
  }

  componentDidMount = () => {
    this.loadDoctoresDetalles();
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.iddoctor !== this.props.iddoctor){
      this.loadDoctoresDetalles();
    }
  }

  render() {
    return (
      <div>
        <h1>Detalle Doctor {this.props.iddoctor}</h1>
        {
          this.state.status == true &&
          (
            <div>
              <h2>{this.state.doctor.apellido}</h2>
              <h2>{this.state.doctor.especialidad}</h2>
              <h2>{this.state.doctor.salario}</h2>
              <h2>{this.state.doctor.idHospital}</h2>
            </div>
          )
        }
      </div>
    )
  }
}
