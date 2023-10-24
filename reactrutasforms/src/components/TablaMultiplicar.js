import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    //caja para numero
    cajaNumero = React.createRef();
    //state con coleccion de numeros
    //que se recorre para dibujar la lista
    state = {
        filas: [],
        limite: 10
    }

    tablaMultiplicar = (e) => {
        //detener el evento
        e.preventDefault();
        console.log("Datos recibidos");
        //capturar el numero de la caja
        var numero = parseInt(this.cajaNumero.current.value);
        //crear array para rellenar cada numero
        var aux = [];
        var limite = parseInt(this.state.numeros)
        for (var index = 0; index <= this.state.limite; index++) {
            var result = index * numero
            var operacion = index + " * " + numero

            //almacenar cada numero
            aux.push(<tr>
                <td>{operacion}</td>
                <td>{result}</td>
                </tr>
            );
        }

        this.setState({
            filas: aux
        })
    }


    render() {
        return (
        <div>
            <h1>Ejemplo Tabla Multiplicar</h1>
            <form onSubmit={this.tablaMultiplicar}>
                <label>Numero: </label>
                <input type="number" ref={this.cajaNumero} /><br/>
                <button>
                    Enviar Datos
                </button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.filas}
                </tbody>
            </table>
        </div>
        )
    }
}