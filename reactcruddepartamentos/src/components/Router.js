import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';
import DetalleDepartamento from './DetalleDepartamento';
import EliminarDepartamento from './EliminarDepartamento';
import UpdateDepartamento from './UpdateDepartamento';

export default class Router extends Component {
  render() {

    function UpdateDepartamentoElement (){
      var { iddepartamento } = useParams();
      return <UpdateDepartamento iddepartamento={iddepartamento}/>
    }

    function DetalleDepartamentoElement(){
        var { iddepartamento, nombre, localidad } = useParams();
        return(<DetalleDepartamento iddepartamento={iddepartamento}
        nombre={ nombre } localidad={ localidad } />)
    }

    function EliminarDepartamentoElement() {
      var { iddepartamento } = useParams();
      return <EliminarDepartamento iddepartamento={iddepartamento} />
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
            <Route path="/" element={<HomeDepartamentos />} />
            <Route path="/create" element={<CreateDepartamentos />} />
            <Route path="/details/:iddepartamento/:nombre/:localidad" element={<DetalleDepartamentoElement />}/>
            <Route path="/delete/:iddepartamento" element={<EliminarDepartamentoElement/>} />
            <Route path="/update/:iddepartamento" element={<UpdateDepartamentoElement />} />
        </Routes> 
      </BrowserRouter>
    )
  }
}
