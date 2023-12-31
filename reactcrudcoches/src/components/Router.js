import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import HomeCoches from './HomeCoches';
import MenuCoches from './MenuCoches';
import CreateCoches from './CreateCoches';
import DetalleCoche from './DetalleCoche';
import UpdateCoche from './UpdateCoche';
import EliminarCoche from './EliminarCoche';

export default class Router extends Component {
  render() {
    function DetallesCochesElement (){
        var { idCoche } = useParams();
        return(<DetalleCoche idcoche={idCoche}/>)
    }
    function UpdateCochesElement (){
        var { idCoche } = useParams();
        return(<UpdateCoche idcoche={idCoche}/>)
    }
    function EliminarCochesElement() {
      var { idCoche } = useParams();
      return <EliminarCoche idcoche={idCoche} />
    }
    return (
      <BrowserRouter>
        <MenuCoches />
        <hr/>
        <Routes>
            <Route path="/" element={<HomeCoches />} />
            <Route path="/create" element={<CreateCoches />} />
            <Route path="/details/:idCoche" element={<DetallesCochesElement />} />
            <Route path="/update/:idCoche" element={<UpdateCochesElement />} />
            <Route path="/delete/:idCoche" element={<EliminarCochesElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
