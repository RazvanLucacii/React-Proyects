import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Home from './MenuRutas/Home'
import Global from './../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Doctores from './MenuDetalle/Doctores';
import DetallesDoctor from './MenuDetalle/DetallesDoctor';
import CreateHospital from './MenuDetalle/CreateHospital';
import ListaHospitales from './MenuDetalle/ListaHospitales';

export default class Router extends Component {
    state = {
        hospitales: [],
        statusHosp: false
    }

    loadHospitales = () => {
        var request = "webresources/hospitales";
        var url = Global.apiUrlHospitales + request;
        axios.get(url).then(response => {
            this.setState ({
                hospitales: response.data,
                statusHosp: true
            })
        })
    }

    componentDidMount = () =>{
        this.loadHospitales();
    }

  render() {
    function DatosDoctores() {
        var { id } = useParams();

        return (<Doctores idHospital={ id }/>)
    }
    function DoctorDetallesElement() {
        var { iddoctor } = useParams();
        return(<DetallesDoctor iddoctor={ iddoctor } />)
    } 
    return (
      <div>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to={"/createhospital"}>
                                New Hospital
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to={"/listahospitales"}>
                                Lista Hospitales
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu Hospitales
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                                    this.state.hospitales.map((hospital, index) =>{
                                        return (
                                            <li key={index}>
                                                <NavLink 
                                                    className="dropdown-item" 
                                                    to={"/doctores/"+ hospital.idhospital}>
                                                    {hospital.nombre}
                                                </NavLink>
                                            </li>)
                                    })
                            }
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <hr/>                                                                   
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/doctores/:id" element={<DatosDoctores/>}/>
                <Route path="/detallesdoctor/:iddoctor" element={<DoctorDetallesElement/>}/>
                <Route path="/createhospital" element={<CreateHospital />}/>
                <Route path="/listahospitales" element={<ListaHospitales />}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
