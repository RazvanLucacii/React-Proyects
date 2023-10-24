import React, { Component } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TablaMultiplicar from './MaestroDetalle/TablaMultiplicar'
import NotFound from './RutasParametros.js/NotFound'
import Home from './RutasParametros.js/Home'
import { useParams } from 'react-router-dom'
import Collatz from './MaestroDetalle/Collatz'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
        //esta funcion permite caputrar los parametros
        //de la ruta de forma dinamica
        //vamos a recibir un parametro llamado minumero
        var { minumero } = useParams();
        //devolvemos la etiqueta <TablaMultiplicar/> con su
        //props de numero
        return <TablaMultiplicar numero={minumero}/> 
    }
    function MenuCollatz() {
        var { numeroCollatz } = useParams();
        return <Collatz numeroParametro= {numeroCollatz}/>
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />}/>
            <Route path="/menu/:numeroCollatz" element={<MenuCollatz />}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
