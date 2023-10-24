import React, { Component, createRef } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class BuscadorCoches extends Component {
    urlApiCoches = Global.urlApiCoches;
    cajaMarca = React.createRef();

    cochesAll = [];

    state = {
        coches: [], 
        status: false
    }

    buscarCoches = () => {
        var request = "webresources/coches";
        axios.get(this.urlApiCoches + request).then(response => {
            this.setState ({
                coches: response.data,
                status: true
            })
            this.cochesAll = response.data;
        })
    }

    buscarCoche = (e) => {
        e.preventDefault();
        var cars = this.cochesAll;
        var marca = this.cajaMarca.current.value.toLowerCase();
        var cochesFiltrados = 
            cars.filter(car => car.marca.toLowerCase().includes(marca));
        this.setState({
            coches: cochesFiltrados,
            status: true
        })
        
    }

    componentDidMount = () => {
        this.buscarCoches();
    }

  render() {
    return (
        <div>
            <h1>Buscador Coches Component</h1>
            <form onSubmit={this.buscarCoche}>
                <label>Marca Coches: </label>
                <input type="text" ref={this.cajaMarca} />
                <button>Buscar Coches</button>
            </form>
            <hr/>
            <table border="10" style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        this.state.coches.map((coche, index) => {
                            return (<tr key={index}>
                                <td key="1">{coche.marca}</td>
                                <td key="2">{coche.modelo}</td>
                                <td key="3">{coche.conductor}</td>
                                <td key="4">
                                    <img src={coche.imagen} style={{width:"250px", height:"150px"}}/>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
  }
}
