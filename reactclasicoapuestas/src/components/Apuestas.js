import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class Apuestas extends Component {
  state={
    apuestas: []
  }

  loadApuestas = () => {
    var request = "api/apuestas";
    var url = Global.apiUrls + request;
    axios.get(url).then(response =>{
      this.setState({
        apuestas: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.loadApuestas();
  }

  render() {
    return (
      <div className="container text-center" style={{width: "1800px"}}>
        <NavLink className="btn btn-success" to="/crear">Realizar Apuesta</NavLink>
        <br/><br/>
        <h2>Loacal: REAL MADRID ; Visitante: FC BARCELONA</h2>
        <table className='table table-primary'>
          <thead>
            <tr>
              <th>USUARIO</th>
              <th>RESULTADO</th>
              <th>FECHA</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.apuestas.map((apuesta, index) =>{
                return(<tr>
                  <td>{apuesta.usuario}</td>
                  <td>{apuesta.resultado}</td>
                  <td>{apuesta.fecha}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
