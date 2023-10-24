import { Component } from "react";

class HijoNumero extends Component{

    sumarNumerosHijo = () => {
        var num = parseInt(this.props.numero);
        this.props.sumarNumeros(num);
    }
    
    render() {
        return(<div>
            <h1 style={{color:"blue"}}>
                Número Hijo: {this.props.numero}
            </h1>
            <button onClick={() => this.sumarNumerosHijo()}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
}
export default HijoNumero;