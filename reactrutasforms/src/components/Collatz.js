import React, { Component } from 'react';

export default class Collatz extends Component {
    //caja para numero
    cajaNumero = React.createRef();
    //state con coleccion de numeros
    //que se recorre para dibujar la lista
    state = {
        numeros: []
    }

    listaCollatz = (e) => {
        //detener el evento
        e.preventDefault();
        console.log("Datos recibidos");
        //capturar el numero de la caja
        var numero = parseInt(this.cajaNumero.current.value);
        //crear array para rellenar cada numero
        var aux = [];
        while (numero != 1){
            if(numero % 2 == 0){
                //par
                numero = numero / 2;
            }else{
                //impar
                numero = (numero * 3) + 1; 
            }
            //almacenar cada numero
            aux.push(numero);
        }

        this.setState({
            numeros: aux
        })
    }


    render() {
        return (
        <div>
            <h1>Ejemplo Collatz</h1>
            <form onSubmit={this.listaCollatz}>
                <label>Numero: </label>
                <input type="number" ref={this.cajaNumero}/><br/>
                <button>
                    Enviar Datos
                </button>
            </form>
            <ul>
                {
                    this.state.numeros.map((numero, index) => {
                        return (<li key={index}>{numero}</li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
