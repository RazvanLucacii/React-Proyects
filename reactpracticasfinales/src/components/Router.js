import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import MenuHospitales from './MenuHospitales';
import Hospitales from './Hospitales';
import IncrementoSalario from './IncrementoSalario';

export default class Router extends Component {
  render() {
    function IncrementoSalarioElement () {
        var { idTrabajador } = useParams();
        return(<IncrementoSalario idtrabajador={idTrabajador}/>)
    }
    return (
      <BrowserRouter>
      <MenuHospitales />
      <hr/>
        <Routes>
            <Route path="/" element={<Hospitales />}/>
            <Route path="/incremento/:idTrabajador" element={<IncrementoSalarioElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
