import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component {
    state = {
        numeros: [10, 20, 30, 40], 
        suma: 0
    }

    generarNumero = () => {
        var aleatorio = parseInt(Math.random() * 100) + 1;
        this.state.numeros.push(aleatorio);
        this.setState( {
            numeros: this.state.numeros
        })
    }

    sumarNumeros = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        })
    }
    
    render() {
        return (<div>
            <h1>Padre Números</h1>
            <h1 style={{color: "red"}}>
                La suma es {this.state.suma}
            </h1>
            <button onClick={() => this.generarNumero()}>Nuevo número</button>
            {
                this.state.numeros.map((num, index) => {
                    return (<HijoNumero numero={num} key={index}
                    sumarNumeros={this.sumarNumeros}/>)
                })
            }
        </div>)
    }
}
export default PadreNumeros;