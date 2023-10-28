import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import Home from './Home';
import MenuEquipos from './MenuEquipos';
import Apuestas from './Apuestas';
import DetalleEquipos from './DetalleEquipos'
import CrearApuesta from './CrearApuesta';
import Jugadores from './Jugadores';
import DetalleJugadores from './DetalleJugadores';

export default class Router extends Component {
  render() {
    function DetallesEquiposElement (){
        var { idEquipo } = useParams();
        return(<DetalleEquipos idequipo={idEquipo}/>);
    }

    function DetalleJugadorElement (){
      var { idJugador } = useParams();
      return(<DetalleJugadores idjugador={idJugador} />);
    }
    function JugadoresElement (){
      var {idEquipo} = useParams();
      return(<Jugadores idEquipo={idEquipo} />);
    }

    
    return (
      <BrowserRouter>
        <MenuEquipos />
        <hr/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/apuestas" element={<Apuestas />}/>
            <Route path="/details/:idEquipo" element={<DetallesEquiposElement />} /> 
            <Route path="/detailsjugador/:idJugador" element={<DetalleJugadorElement />} /> 
            <Route path="/jugadores/:idEquipo" element={<JugadoresElement />} />     
            <Route path="/crear" element={<CrearApuesta />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
