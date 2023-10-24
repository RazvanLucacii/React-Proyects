import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }
    
    generarTabla = () => {
        var aux = [];
        var num = parseInt(this.props.numero);
        for (let index = 1; index <= 10; index++) {
            var operacion = num * index;
            aux.push(operacion);    
        }
        this.setState ({
            tabla: aux
        })
    }
    
    componentDidMount = () => {
        console.log(this.props.numero);
        this.generarTabla();
    }
  render() {
    return (
      <div>
        <h1>Tabla Multiplicar Router</h1>
        <h2 >Numero: {this.props.numero}</h2>
        <ul>
            {
                this.state.tabla.map((num, index) => {
                    return(<li key={index}>{num}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
