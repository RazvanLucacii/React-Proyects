import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import Home from './Home';
import MenuEquipos from './MenuEquipos';
import Apuestas from './Apuestas';
import DetalleEquipos from './DetalleEquipos'
import CrearApuesta from './CrearApuesta';

export default class Router extends Component {
  render() {
    function DetallesEquiposElement (){
        var { idEquipo } = useParams();
        return(<DetalleEquipos idequipo={idEquipo}/>)
    }
    
    return (
      <BrowserRouter>
        <MenuEquipos />
        <hr/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/apuestas" element={<Apuestas />}/>
            <Route path="/details/:idEquipo" element={<DetallesEquiposElement />} />
            <Route path="/crear" element={<CrearApuesta />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
