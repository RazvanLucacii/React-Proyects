import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CrearApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaRealMadrid = React.createRef();
    cajaBarcelona = React.createRef();
    cajaFecha = React.createRef();

    state = {
      status: false
    }

    insertApuesta = (e) =>{
      e.preventDefault();
      var usuario = this.cajaUsuario.current.value;
      var realMadrid = this.cajaRealMadrid.current.value;
      var barcelona = this.cajaBarcelona.current.value;
      var fecha = this.cajaFecha.current.value;
      var resultado = realMadrid + "-" + barcelona;

      var apuesta = {
        usuario: usuario,
        resultado: resultado,
        fecha: fecha
      }

      var request = "api/apuestas";
      var url = Global.apiUrls + request;
      axios.post(url, apuesta).then(response =>{
        this.setState({
          status: true
        })
      })
    }


  render() {
    if(this.state.status === true){
      return(<Navigate to="/apuestas" />)
    }else{
      return (
        <div className='container text-center'>
          <h1>Nueva Apuesta</h1>
          <form>
            <label>Usuario</label>
            <input ref={this.cajaUsuario} className='form-control'></input>
            <br/>
            <label>Real Madrid</label>
            <input ref={this.cajaRealMadrid} className='form-control'></input>
            <br/>
            <label>FC Barcelona</label>
            <input ref={this.cajaBarcelona} className='form-control'></input>
            <br/>
            <label>Fecha</label>
            <input ref={this.cajaFecha} className='form-control'></input>
            <br/>
            <button className='btn btn-info' onClick={this.insertApuesta}>Nueva Apuesta</button>
          </form>
        </div>
      )
    }
  }
}
