import React, { Component } from 'react'

export default class MultiplicarSelect extends Component {
    selectNumero = React.createRef();
    
    mostrarTablaMultiplicar = (e) => {
        e.preventDefault();
        var numero = parseInt(this.selectNumero.current.value);
        var aux = [];
        for (var i = 1; i <= 10; i++){
            var resultado = numero * i;
            var operacion = numero + " * " + i;
            //ALMACENAMOS LOS DATOS EN EL ARRAY CON FORMATO HTML
            aux.push(<tr key={i}>
                <td>{operacion}</td>
                <td>{resultado}</td>
            </tr>);
        }
        //POR ULTIMO, CAMBIAMOS EL STATE DE filas
        this.setState({
            filas: aux
        })
    }
    //VAMOS A CREAR UN METODO QUE NOS DEVOLVERA EL CODIGO HTML
    //DIRECTAMENTE CON LOS OPTIONS
    generarOptions = () => {
        var options = [];
        for (var i = 1; i <= 10; i++){
            var random = parseInt(Math.random()  * 500) + 1;
            options.push(<option key={i} value={random}>{random}</option>)
        }
        return options;
    }
    //NECESITAMOS UN state CON LAS FILAS DE LA TABLA
    //CON FORMATO HTML
    state = {
        filas: []
    }
  render() {
    return (
        <div>
            <h1>TablaMultiplicar Component</h1>
            <form onSubmit={this.mostrarTablaMultiplicar}>
                <label>Introduzca un número</label>
                <select ref={this.selectNumero}>
                    {this.generarOptions()}
                </select>
                <button>
                    Tabla multiplicar
                </button>
            </form>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Operación</th>
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