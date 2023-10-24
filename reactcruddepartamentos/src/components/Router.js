import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';
import DetalleDepartamento from './DetalleDepartamento';

export default class Router extends Component {
  render() {

    function DetalleDepartamentoElement(){
        var { iddepartamento, nombre, localidad } = useParams();
        return(<DetalleDepartamento iddepartamento={iddepartamento}
        nombre={ nombre } localidad={ localidad } />)
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
            <Route path="/" element={<HomeDepartamentos />} />
            <Route path="/create" element={<CreateDepartamentos />} />
            <Route path="/details/:iddepartamento/:nombre/:localidad" element={<DetalleDepartamentoElement />}/>
        </Routes> 
      </BrowserRouter>
    )
  }
}
